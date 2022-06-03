import React from "react";
import { Container } from "react-bootstrap";
import PremiumLearnMore from "../../assets/premium-learn-more.svg";
import "./GetPremium.css";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const RootStyle = styled("div")(({ theme }: any) => ({
  backgroundColor: theme.palette.background.default,
}));
const GetPremium = () => {
  return (
    <RootStyle className="health-care-provider-section">
      <Container>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-12 text-start order-2 order-md-1 ps-5 mb-3">
            <div className="d-flex flex-column">
              <h1 className="fw-bold" style={{ color: "#e3366d" }}>
                Want to
              </h1>
              <h1 className="fw-bold" style={{ color: "#2097ca" }}>
                get Discounts?
              </h1>
              <hr className="hr-w p-0 my-3 mx-start" />

              <p className="health-care-provider-description">
                Becoming a premium member you can have a varieties range of
                discount available to the services.
              </p>
            </div>
            <NavLink
              style={{ textDecoration: "none" }}
              to="/premium-membership"
            >
              <Button variant="outlined">Learn More</Button>
            </NavLink>
          </div>
          <div className="col-lg-6 col-12 img-container order-1 order-md-2 mb-5">
            <img src={PremiumLearnMore} alt="" />
          </div>
        </div>
      </Container>
    </RootStyle>
  );
};

export default GetPremium;
