import React from "react";
import { Link, NavLink } from "react-router-dom";
import aboutImg from "../../assets/Doctors-pana.svg";
import "./About.css";
// @mui
import { styled } from "@mui/material/styles";
// components
import Page from "../../components/Page";
import FAQ from "../../components/faq/FAQ";
// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

const services = [
  "Virtual Meet",
  "Book Appointment",
  "Chat with Doctors",
  "Covid Portal",
  "Blood Donors",
  "Pharmacy",
  "Premium Membership",
  "Diagnostic Center",
  "Report Review",
];

const About = () => {
  return (
    <Page title="About us">
      <RootStyle>
        <div
          className="my-5 text-center"
          style={{
            backgroundColor: "#f5f5f5",
            padding: "100px",
            margin: 0,
          }}
        >
          <h1> About Us </h1>
          <span>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              Home
            </NavLink>
          </span>
          {" > "} <span> About Us </span>
        </div>

        <div className="container mx-auto text-left mb-5 pb-5">
          <div className="row">
            <div className="col-12 col-lg-8 mt-5">
              <div className="bg-white border rounded-3 p-4">
                <div className="overflow-hidden about-img">
                  <img src={aboutImg} alt="" className="w-100" />
                </div>
                <h1
                  className="fs-3 text-left mt-6"
                  style={{ letterSpacing: "1px" }}
                >
                  WELCOME, WE ARE{" "}
                  <span style={{ color: "rgb(69, 142, 167)" }}>DOCTOR </span>
                  <span style={{ color: "#d62246" }}>MEET!</span>
                </h1>
                <small>
                  <p className="text-secondary text-left mt-4 mb-6">
                    We provide to you the best choices for you. Adjust it to
                    your health needs and make sure your undergo treatment with
                    our highly qualified doctors you can consult with us which
                    type of service is suitable for your health.
                  </p>
                </small>
                <Link to="/contact-us">
                  <button className="btn btn-outline-info mt-2">
                    Contact Now
                  </button>
                </Link>
              </div>
            </div>

            {/* services */}
            <div className="col-12 col-lg-4 mt-5 px-4">
              <h1
                className="fs-3 border-bottom border-2 pb-3 mb-3 rounded"
                style={{ letterSpacing: "1px" }}
              >
                SERVICES
              </h1>
              {services.map((category, index) => (
                <p className="service-item mb-4 fw-medium" key={index}>
                  {category.toUpperCase()}
                </p>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center fw-bold mt-5" style={{ color: "#00acb1" }}>
          Questions
        </p>
        <h1 className="fw-bold text-center" style={{ color: "#005963" }}>
          Frequently Asked Questions
        </h1>
        <hr className="hr-w mx-auto" />
        <div className="container mx-auto my-5">
          <FAQ></FAQ>
        </div>
      </RootStyle>
    </Page>
  );
};

export default About;
