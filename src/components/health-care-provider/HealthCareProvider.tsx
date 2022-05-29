import React from "react";
import { Container } from "react-bootstrap";
import HealthCareProviderImg from "../../assets/health-care-provider/HealthCareProvider.png";
import "./HealthCareProvider.css";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const RootStyle = styled("div")(({ theme }: any) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));
const HealthCareProvider = () => {
  return (
    <RootStyle className="health-care-provider-section">
      <Container>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-12 img-container mb-3">
            <img src={HealthCareProviderImg} alt="" />
          </div>
          <div className="col-lg-6 col-12 text-start ps-5">
            <div className="d-flex flex-column">
              <h1 className="fw-bold" style={{ color: "#e3366d" }}>
                Are you
              </h1>
              <h1 className="fw-bold" style={{ color: "#2c90b9" }}>
                a qualified Doctor?
              </h1>
              <div className="hr-line my-3 text-justify"></div>
              <p className="health-care-provider-description">
                Join Doctor Meet network and create your virtual chamber provide
                medical consultancy via video call and expand the reach of your
                service.
              </p>
            </div>
            <NavLink style={{ textDecoration: "none" }} to="/dashboard/user/join-us">
              <Button variant="contained">Join Us</Button>
            </NavLink>
          </div>
        </div>
      </Container>
    </RootStyle>
  );
};

export default HealthCareProvider;
