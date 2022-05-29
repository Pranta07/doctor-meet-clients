import React from "react";
import { Box, Modal } from "@mui/material";

import "./DiagnosticImaging.css";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({

  backgroundColor: theme.palette.background.default,
}))
const DiagnosticImaging = ({ imaging }) => {
  const intPrice = imaging.price;
  const intDiscount = imaging.discount;
  const floatDiscount = parseFloat(intDiscount).toFixed(2);

  const dd = floatDiscount / 100.0;
  // console.log(intPrice,dd);
  const floatPrice = intPrice - intPrice * dd;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 336,
    backgroundColor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
  };
  return (
    <RootStyle className="imaging-modal-container">
      <div
        className="d-flex align-items-center imaging-info-container"
        onClick={handleOpen}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
          alt=""
          style={{ width: "30px", height: "30px" }}
        />
        <h5 className="ms-2">{imaging.title}</h5>
      </div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 id="modal-modal-title" className="imaging-modal-title">
            {imaging.title}
          </h1>
          <h4
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="imaging-modal-description"
          >
            {imaging.content}
          </h4>
          <h3 className="imaging-modal-code">Code : {imaging.code}</h3>
          <div>
            <h3 className="imaging-modal-price">
              Price : ${floatPrice}(-{imaging.discount}% OFF)
            </h3>
          </div>
          <Link to={`/diagnostic-appointment-form/imaging/${imaging._id}`}>
            <button className="btn-book-now">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2983/2983788.png"
                alt="book-now"
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Book Now
            </button>
          </Link>
        </Box>
      </Modal>
    </RootStyle>
  );
};

export default DiagnosticImaging;
