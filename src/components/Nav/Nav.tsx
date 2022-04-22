import "bootstrap";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import logo from "../../Assets/img/logo.png";
import { Avatar } from "@mui/material";
import "./Nav.css";
import { BoxArrowInLeft, BoxArrowRight, CaretDownFill } from "react-bootstrap-icons";
const Nav = () => {
    const [offset, setOffset] = useState(0);
    let { user, logOut } = useAuth();

    const parallaxNav =
        offset < 50
            ? "navbar navbar-expand-lg navbar-light fw-bold"
            : "sticky-top navbar navbar-expand-lg shadow navbar-light bg-light fw-bold";
    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };
    }, []);

    return (
        <>
            {window.location.pathname === "/dashboard/dashboarHome" ||
            window.location.pathname === "/dashboard/doctors" ||
            window.location.pathname === "/dashboard/admin" ||
            window.location.pathname === "/dashboard/favdoc" ? (
                <div></div>
            ) : (
                <nav className={parallaxNav}>
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">
                            <img
                                className="img-fluid"
                                src={logo}
                                alt=""
                                height="70px"
                            />
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarTogglerDemo02"
                        >
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink
                                        aria-current="page"
                                        className="nav-link active"
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/doctors">
                                        Find Doctors
                                    </NavLink>
                                </li>
                                <div className="dropdown my-auto nav-item ">
                                    <li className="dropbtn-more nav-link my-auto">
                                        More Service's <CaretDownFill  />
                                    </li>
                                    <div className="dropdown-content">
                                        <a href="#">
                                            <NavLink to="/CovidPortal">
                                                Covid Portal
                                            </NavLink>
                                        </a>
                                        <a>
                                            <NavLink to="/FindDonors">
                                                Blood Donors
                                            </NavLink>
                                        </a>
                                        <a>
                                            <NavLink to="/Pharma">
                                                Pharmacy
                                            </NavLink>
                                        </a>
                                        <a>
                                            <NavLink to="/premiumMembership">
                                                Premium Membership
                                            </NavLink>
                                        </a>
                                    </div>
                                </div>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/VideoConsultation"
                                    >
                                        Virtual Meet
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/ContactUs"
                                    >
                                        Contact Us
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/manage-bookings"
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                            </ul>
                            {user ? (
                                <div className="dropdown ms-auto">
                                    <Avatar
                                        src={user?.photoURL || ""}
                                        alt="user-img"
                                        sx={{
                                            backgroundColor: "skyblue",
                                        }}
                                    />
                                    <div className="dropdown-content">
                                        <a>
                                            <NavLink to="/Profile">
                                                Profile
                                            </NavLink>
                                        </a>
                                        <a>
                                            <NavLink to="/dashboard/dashboarHome">
                                                Dashboard
                                            </NavLink>
                                        </a>
                                        <a onClick={logOut}>
                                            <NavLink to="/">
                                                Sign Out{" "}
                                                <BoxArrowRight className="fs-6"></BoxArrowRight>
                                            </NavLink>
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/login"
                                        >
                                            Login{" "}
                                            <BoxArrowInLeft className="fs-5"></BoxArrowInLeft>
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
};

export default Nav;
