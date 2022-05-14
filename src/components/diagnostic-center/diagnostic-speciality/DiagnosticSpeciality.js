import { Grid } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import "./DiagnosticSpeciality.css";
const DiagnosticSpeciality = ({ speciality }) => {
  // console.log(speciality)
  return (
    <Grid xs={12} lg={3} md={4} sx={{display:'flex',justifyContent:'center'}} >
      <Card style={{ width: "18rem",border:'none',boxShadow:" rgba(0, 0, 0, 0.1) 0px 10px 50px" }}>
        <Card.Img variant="top" src={speciality.img} />
        <Card.Body>
          <Card.Title>{speciality.title}</Card.Title>
          <Card.Text>{speciality.content}</Card.Text>
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default DiagnosticSpeciality;
