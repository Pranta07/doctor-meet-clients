import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import brand from "../../assets/img/logo.png";
import ContactInfo from "../contact-info/ContactInfo";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";

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
                    <ContactInfo />
                    <Divider
                        sx={{
                            width: "81%",
                            mx: "auto",
                            color: "#fff",
                            padding: 0.1,
                        }}
                    />
                    <footer>
                        <section className="container text-white text-start">
                            <div className="row mx-auto py-5">
                                <div className="col-12 col-lg-3 px-4">
                                    <h2>Doctor Meet</h2>
                                    <p className="mt-2">
                                        <small>
                                            Doctors Meet Up provides
                                            progressive, and affordable
                                            healthcare, accessible for everyone.
                                        </small>
                                    </p>
                                    <div>
                                        <p>FOLLOW US ON</p>
                                        <a
                                            style={{ color: "#fff" }}
                                            href="https://www.facebook.com/"
                                        >
                                            {" "}
                                            <FacebookIcon className="social-icon" />
                                        </a>
                                        <a
                                            style={{ color: "#fff" }}
                                            href="https://www.twitter.com/"
                                        >
                                            {" "}
                                            <TwitterIcon className="social-icon" />
                                        </a>
                                        <a
                                            style={{ color: "#fff" }}
                                            href="https://www.instagram.com/"
                                        >
                                            {" "}
                                            <InstagramIcon className="social-icon" />
                                        </a>
                                        <a
                                            style={{ color: "#fff" }}
                                            href="https://www.linkedin.com/"
                                        >
                                            {" "}
                                            <LinkedInIcon className="social-icon" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-3 px-4 pt-3">
                                    <h5 className="fw-bold">Company</h5>
                                    <ul className="list mt-2">
                                        <NavLink
                                            style={{ color: "#fff" }}
                                            to="/about-us"
                                        >
                                            <li>About</li>
                                        </NavLink>{" "}
                                        <NavLink
                                            style={{ color: "#fff" }}
                                            to="/about-us"
                                        >
                                            <li>Reports</li>
                                        </NavLink>{" "}
                                        <NavLink
                                            style={{ color: "#fff" }}
                                            to="/find-doctors"
                                        >
                                            <li>Top Doctors</li>
                                        </NavLink>{" "}
                                        <NavLink
                                            style={{ color: "#fff" }}
                                            to="/find-donors"
                                        >
                                            <li>Donate Blood</li>
                                        </NavLink>{" "}
                                        <NavLink
                                            style={{ color: "#fff" }}
                                            to="/covid-portal"
                                        >
                                            <li>Covid Portal</li>
                                        </NavLink>{" "}
                                    </ul>
                                </div>
                                <div className="col-12 col-md-4 col-lg-3 px-4 pt-3">
                                    <h5 className="fw-bold">District</h5>
                                    <ul className="list mt-2">
                                        <li>Chittagong</li>
                                        <li>Dhaka</li>
                                        <li>Khulna</li>
                                        <li>Rajshahi</li>
                                        <li>Cumilla</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-4 col-lg-3 px-4 pt-3">
                                    <h5 className="fw-bold">Help</h5>
                                    <ul className="list mt-2">
                                        <NavLink
                                            style={{ color: "#fff" }}
                                            to="/contact-us"
                                        >
                                            <li>Help Center</li>
                                        </NavLink>{" "}
                                        <NavLink
                                            style={{ color: "#fff" }}
                                            to="/contact-us"
                                        >
                                            <li>Contact Support</li>
                                        </NavLink>{" "}
                                        <NavLink
                                            style={{ color: "#fff" }}
                                            to="/contact-us"
                                        >
                                            <li>Instruction</li>
                                        </NavLink>{" "}
                                        <NavLink
                                            style={{ color: "#fff" }}
                                            to="/contact-us"
                                        >
                                            <li>Emergency</li>
                                        </NavLink>{" "}
                                    </ul>
                                </div>
                            </div>
                            <hr
                                className="bg-white"
                                style={{ height: "2px" }}
                            />
                        </section>
                        <p
                            className="text-center text-white mb-0 pt-2 pb-4"
                            style={{ fontSize: "16px" }}
                        >
                            All rights reserved ©Doctors Meet, 2022
                        </p>
                    </footer>
                </div>
            )}
        </RootStyle>
    );
};

export default Footer;
