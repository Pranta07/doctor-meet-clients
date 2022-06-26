import { Grid } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import "./DiagnosticSpecialty.css";
const DiagnosticSpecialty = ({ specialty }) => {

  return (
    <Grid xs={12} lg={3} md={4} sx={{display:'flex',justifyContent:'center'}} >
      <Card style={{ width: "18rem",border:'none',boxShadow:" rgba(0, 0, 0, 0.1) 0px 10px 50px" }}>
        <Card.Img variant="top" src={specialty.img} />
        <Card.Body>
          <Card.Title>{specialty.title}</Card.Title>
          <Card.Text>{specialty.content}</Card.Text>
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default DiagnosticSpecialty;
