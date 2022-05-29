import React from "react";
import { Container } from "react-bootstrap";
import DiagnosticImagings from "../diagnostic-imagings/DiagnosticImagings";
import DiagnosticPathologies from "../diagnostic-pathologies/DiagnosticPathologies";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  backgroundColor: theme.palette.background.default,
}));
const OurDiagnosticServices = () => {
  return (
    <RootStyle
      style={{ backgroundColor: "#F2F2F2", padding: "1px 0 100px 0px" }}
      className="mt-3 mb-3"
    >
      <div className="diagnosis-header">
        <h1 className="diagnosis-title">Our Diagnosis Services</h1>
        <hr />
      </div>
      <Container>
        <DiagnosticImagings></DiagnosticImagings>
        <DiagnosticPathologies></DiagnosticPathologies>
      </Container>
    </RootStyle>
  );
};

export default OurDiagnosticServices;
