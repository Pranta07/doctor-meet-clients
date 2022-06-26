import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import DiagnosticSpecialty from "../diagnostic-specialty/DiagnosticSpecialty";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}))

const DiagnosticSpecialties = () => {
  const [specialties, setSpecialties] = useState([]);
  useEffect(() => {
    fetch("https://floating-basin-02241.herokuapp.com/speciality")
      .then((res) => res.json())
      .then((data) => setSpecialties(data));
  }, []);
  return (
    <div className="diagnosis-specialty">
      <Container>
        <div className="diagnosis-header">
          <h1 className="diagnosis-title">Our Specialties</h1>
          <hr />
        </div>
        <Grid container spacing={2} sx={{justifyContent:'center'}} >
          {specialties.map((specialty) => (
            <DiagnosticSpecialty
            specialty={specialty}
            ></DiagnosticSpecialty>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default DiagnosticSpecialties;
