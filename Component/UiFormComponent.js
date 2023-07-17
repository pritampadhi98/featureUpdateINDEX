import React, { useState } from "react";
import { experienceData } from "./NewData";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Button,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import AccordionComponent from "./AccordionComponent";

const UiForm = () => {
  const [brandData, setBrandData] = useState({
    Data: {},
  });
  console.log(brandData, "brandData");

  const handleChange = (event) => {
    brandData.brandName = event.target.value;
  };
  const addData = async (nextedVAl) => {
    try {
      const response = await fetch("/api/test/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(brandData),
      });

      const data = await response.json();
      alert("Data saved");
      setBrandData({
        Data: {},
      });
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };
  return (
    <div>
      <Box
        sx={{
          marginLeft: "20%",
          marginRight: "20%",
          marginTop: "2%",
          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.2)",
          padding: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            lineHeight: "40px",
            color: "green",
            fontWeight: "500px",
            textAlign: "center",
            paddingBottom: "40px",
          }}
        >
          Experience index
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <Typography sx={{ margin: "auto" }}>BrandName:</Typography>
          <TextField
            fullWidth
            id="fullWidth"
            placeholder="BrandName"
            onChange={handleChange}
          />
        </Box>
        {experienceData?.map((accordionData) => {
          return (
            <AccordionComponent
              key={accordionData?.category}
              accordionData={accordionData}
              brandData={brandData?.Data}
              setBrandData={setBrandData}
            />
          );
        })}

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
            gap: "10px !important",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "green !important",
              width: "200px",
              color: "white !important",

              fontSize: "15px",
              lineHeight: "20px",
              fontWeight: "500",
            }}
            onClick={addData}
          >
            Save
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white !important",
              width: "200px",
              color: "black !important",
              border: "1px solid black",
              fontSize: "15px",
              lineHeight: "20px",
              fontWeight: "500",
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default UiForm;
