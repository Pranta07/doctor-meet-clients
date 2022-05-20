import { Grid } from "@mui/material";
import React from "react";
import { Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ChooseDiagnostic.css";



const ChooseDiagnostic = ({ section }) => {
  const intPrice = section.price;
  const intDiscount = section.discount;
  const floatDiscount = parseFloat(intDiscount).toFixed(2);

  const dd = floatDiscount / 100.0;
  // console.log(intPrice,dd);
  const off = (intPrice * dd).toFixed(2);
  const floatPrice = intPrice - intPrice * dd;
  const navigate = useNavigate();
  const goToForm = (e) => {
    e.preventDefault();
    navigate(`/diagnostic-appointment-form/sections/${section._id}`);
  };
  return (
    <Grid lg={4} md={4} sm={12} sx={{display:'flex',justifyContent:'center'}}>
      <Card style={{ width: "18rem",border:"none",boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
        <Card.Img variant="top" src={section.img} />
        <Card.Body>
          <Card.Title>{section.title}</Card.Title>
          <Card.Text>
            {section.content}
            <br />
            <h6>
              ${floatPrice} (included ${off} discount)
            </h6>
          </Card.Text>
          <button className="btn-choose-diagnostic-book-now" onClick={goToForm}>
            Book Now
          </button>
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default ChooseDiagnostic;
