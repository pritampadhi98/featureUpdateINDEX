import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ImageModal({ value }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <VisibilityIcon
        onClick={handleOpen}
        sx={{ cursor: "pointer", marginTop: "-3px" }}
      ></VisibilityIcon>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ textAlign: "center" }}
          >
            {value?.comment}
          </Typography>
          {value?.attachment?.length > 0 && (
            <Image
              src={value?.attachment}
              width={600}
              height={500}
              alt="Picture of the author"
              style={{ backgroundPosition: "contain" }}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}
