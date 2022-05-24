import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import DiagnosticPathology from "../diagnostic-pathology/DiagnosticPathology";
import { Icon } from "@iconify/react";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({

  backgroundColor: theme.palette.background.default,
}))
const DiagnosticPathologies = () => {
  const [pathologies, setPathologies] = useState([]);
  useEffect(() => {
    fetch("https://floating-basin-02241.herokuapp.com/pathology")
      .then((res) => res.json())
      .then((data) => setPathologies(data));
  }, []);
  return (
    <RootStyle>
      <div className="mb-3 mt-5">
        <h3 className="services-title">Pathology</h3>
        <hr className="services-hr" />
      </div>
      <Row className="d-flex align-items-center justify-content-between">
        <Col item xs={12} md={4} lg={2} style={{display:'flex',justifyContent:'center',marginBottom:'15px'}}>
          <div className="imaging-icon-holder d-flex justify-content-center align-items-center flex-column">
            <Icon className="diagnosis" icon="medical-icon:i-pathology" />
          </div>
        </Col>
        <Col item xs={12} md={8} lg={9} className="">
          <div className="imaging-services-holder">
            {pathologies.map((pathology) => (
              <DiagnosticPathology
                pathology={pathology}
                key={pathology._id}
              ></DiagnosticPathology>
            ))}
          </div>
        </Col>
      </Row>
    </RootStyle>
  );
};

export default DiagnosticPathologies;
