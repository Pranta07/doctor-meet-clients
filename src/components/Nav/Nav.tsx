import "bootstrap";
import React, { useEffect, useState } from "react";
import { ArrowDownCircleFill, PersonCircle } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import useFirebase from "../../firebase/useFirebase/useFirebase";
import logo from "./../../Assets/img/logo.png";
import "./Nav.css";

const Nav = () => {
    const [offset, setOffset] = useState(0);
    let { user, logOut } = useFirebase();

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
                        <NavLink
                            className="navbar-brand fs-2 ps-md-5 ms-md-5"
                            to="/"
                        >
                            {/* <span>Doctors Meet</span> */}{" "}
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
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                                        Find a doctor
                                    </NavLink>
                                </li>
                                <div className="dropdown my-auto nav-item ">
                                    <li className="dropbtn-more  my-auto ms-2">
                                        More Service's <ArrowDownCircleFill />
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
                                        to="/adding-tour-plan"
                                    >
                                        Testimonials
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
                                        About us
                                    </NavLink>
                                </li>
                                <li className="nav-item"></li>
                                {user ? (
                                    <div className="dropdown">
                                        <div className="dropbtn ms-2" />
                                        <PersonCircle className="dropbtn ms-2"></PersonCircle>
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
                                                    Sign Out
                                                </NavLink>
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link"
                                            to="/login"
                                        >
                                            Login
                                        </NavLink>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
};

export default Nav;
