import "bootstrap";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/img/logo.png";
import { Avatar } from "@mui/material";
import "./Nav.css";
import {
  BoxArrowInLeft,
  BoxArrowRight,
  CaretDownFill,
} from "react-bootstrap-icons";
//
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
      {window.location.pathname === "/dashboard/dashboard-home" ||
      window.location.pathname === "/dashboard/doctors" ||
      window.location.pathname === "/dashboard/admin" ||
      window.location.pathname === "/dashboard/favorite-doctor" ? (
        <div></div>
      ) : (
        <nav className={parallaxNav}>
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img className="img-fluid" src={logo} alt="" height="70px" />
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
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
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
                    More Service's
                  </li>
                  <div className="dropdown-content">
                    <p>
                      <NavLink to="/covid-portal">Covid Portal</NavLink>
                    </p>
                    <p>
                      <NavLink to="/find-donors">Blood Donors</NavLink>
                    </p>
                    <p>
                      <NavLink to="/pharmacy">Pharmacy</NavLink>
                    </p>
                    <p>
                      <NavLink to="/premium-membership">
                        Premium Membership
                      </NavLink>
                    </p>
                  </div>
                </div>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/video-route">
                    Virtual Meet
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact-us">
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about-us">
                    About Us
                  </NavLink>
                </li>
              </ul>
              {user ? (
                <div className="dropdown ms-auto">
                  <Avatar
                    src={user.photoURL || ""}
                    alt="user-img"
                    sx={{
                      backgroundColor: "skyblue",
                    }}
                  />
                  <div className="dropdown-content">
                    <p>
                      <NavLink to="/profile">Profile</NavLink>
                    </p>
                    <p>
                      <NavLink to="/dashboard/dashboard-home">
                        Dashboard
                      </NavLink>
                    </p>
                    <p onClick={logOut}>
                      <NavLink to="/">Sign Out </NavLink>
                    </p>
                  </div>
                </div>
              ) : (
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
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
