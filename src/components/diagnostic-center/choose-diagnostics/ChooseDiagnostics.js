import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChooseDiagnostic from "../choose-diagnostic/ChooseDiagnostic";
import "./ChooseDiagnostics.css";
const ChooseDiagnostics = () => {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    fetch("https://floating-basin-02241.herokuapp.com/sections")
      .then((res) => res.json())
      .then((data) => setSections(data));
  }, []);
  return (
    <div>
      <Container>
        <div>
          <div className="diagnosis-header">
            <h1 className="diagnosis-title">We Provide Best Diagnosis</h1>
            <h6 className="diagnosis-title-content">
              From us you can get the best diagnosis services. We are always
              commited to your satisfaction
            </h6>
            <hr />
          </div>
          <div className="choose-diagnostics-card-container">
            <Grid spacing={2} sx={{justifyContent:'center'}} container>
              {sections.map((section) => (
                <ChooseDiagnostic section={section}></ChooseDiagnostic>
              ))}
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseDiagnostics;
