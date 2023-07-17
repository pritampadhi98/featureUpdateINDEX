import React, { useState, useEffect } from "react";
import { Typography, Box, Button, TextField, Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const INITIAL_STATE_VALUE = {
  attachment: "",
  rating: 0,
  comment: "",
};

const Layout = ({ usability_key, contentVal, brandData, setBrandData }) => {
  const dispatch = useDispatch();
  const [layoutState, setLayoutState] = useState(INITIAL_STATE_VALUE);
  const [value, setValue] = useState(0);
  const [base64Image, setBase64Image] = useState("");
  const [data, setData] = useState({});
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setBase64Image(base64String);
      setLayoutState((prev) => ({
        ...prev,
        attachment: base64String,
      }));
    };

    reader.readAsDataURL(file);
  };
  const [comment, setComment] = useState({});

  const handleChange = (event) => {
    setLayoutState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = () => {
    if (brandData[usability_key]) {
      brandData[usability_key] = {
        ...brandData[usability_key],
        ...layoutState,
      };
    } else {
      brandData[usability_key] = layoutState;
    }
    setLayoutState(INITIAL_STATE_VALUE);
  };
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        maxHeight: "320px",
        minHeight: "320px",
      }}
    >
      <Box>
        <Box
          sx={{
            backgroundColor: "#d2d3d6",
            height: "100%",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <Typography>
            {`${contentVal.slice(0, 80)} ${
              contentVal?.length > 100 ? "..." : ""
            }`}{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        >
          <Box>
            <Rating
              value={layoutState?.rating}
              name="rating"
              onChange={handleChange}
            />
          </Box>
          <Box>
            <input
              accept="image/*"
              type="file"
              id="select-image"
              name="attachment"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <label htmlFor="select-image">
              <CloudUploadIcon />
            </label>
          </Box>
        </Box>

        <TextField
          label="Comment"
          multiline
          rows={3}
          value={layoutState?.comment}
          name="comment"
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "12px",
          }}
        >
          <Button
            sx={{
              backgroundColor: "grey !important",
              padding: "10px",
              color: "white ",
              fontSize: "14px",
              lineHeight: "20px",
            }}
            onClick={handleClick}
            disabled={layoutState?.rating === 0}
          >
            submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
