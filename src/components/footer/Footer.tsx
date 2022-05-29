import React from "react";
import { useLocation } from "react-router-dom";
import brand from "../../assets/img/logo.png";
import ContactInfo from "../contact-info/ContactInfo";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));
const Footer = () => {
  const { pathname } = useLocation();
  if (pathname === "/dashboard/dashboard-home") return null;
  else if (pathname === "/dashboard/doctor") return null;
  else if (pathname === "/dashboard/admin") return null;

  return (
    <RootStyle className="footer-bg-color">
      {window.location.pathname === "/dashboard/dashboard-home" ||
      window.location.pathname === "/dashboard/doctors" ||
      window.location.pathname === "/dashboard/admin" ||
      window.location.pathname === "/dashboard/favorite-doctors" ? (
        <div></div>
      ) : (
        <div>
          <ContactInfo></ContactInfo>
          <footer>
            <section className="container text-white text-start">
              <div className="row mx-auto py-5">
                <div className="col-12 col-lg-3 px-4">
                  <img src={brand} alt="" className="img-fluid" />
                  <p className="mt-2">
                    <small>
                      Doctors Meet Up provides progressive, and affordable
                      healthcare, accessible on mobile and online for everyone.
                    </small>
                  </p>
                  <div>
                    <h5 className="fw-bold">FOLLOW US ON</h5>
                    <FacebookIcon className="social-icon" />
                    <TwitterIcon className="social-icon" />
                    <InstagramIcon className="social-icon" />
                    <LinkedInIcon className="social-icon" />
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 px-4 pt-3">
                  <h5 className="fw-bold">Company</h5>
                  <ul className="list mt-2">
                    <li>About</li>
                    <li>Reports</li>
                    <li>Top doctors</li>
                    <li>Donate Blood</li>
                    <li>Covid Portal</li>
                    <li>Apps</li>
                  </ul>
                </div>
                <div className="col-12 col-md-4 col-lg-3 px-4 pt-3">
                  <h5 className="fw-bold">District</h5>
                  <ul className="list mt-2">
                    <li>Chittagong</li>
                    <li>Dhaka</li>
                    <li>Khulna</li>
                    <li>Rajshahi</li>
                    <li>Comilla</li>
                  </ul>
                </div>
                <div className="col-12 col-md-4 col-lg-3 px-4 pt-3">
                  <h5 className="fw-bold">Help</h5>
                  <ul className="list mt-2">
                    <li>Help Center</li>
                    <li>Contact support</li>
                    <li>Instruction</li>
                    <li>Emergency</li>
                  </ul>
                </div>
              </div>
              <hr className="bg-white" style={{ height: "2px" }} />
            </section>
            <p
              className="text-center text-white mb-0 pt-2 pb-4"
              style={{ fontSize: "16px" }}
            >
              All rights reserved ©Doctors Meet, 2022 | NERMX Developers
            </p>
          </footer>
        </div>
      )}
    </RootStyle>
  );
};

export default Footer;
