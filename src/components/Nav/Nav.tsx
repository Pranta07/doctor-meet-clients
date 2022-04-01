import "bootstrap";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import "./Nav.css";
// import { HashLink } from "react-router-hash-link";
const Nav = () => {
  const [offset, setOffset] = useState(0);
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
      <nav className={parallaxNav}>
        <div className="container">
          <NavLink className="navbar-brand fs-2 ps-md-5 ms-md-5" to="/">
            <span>Doctors Meet</span>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink aria-current="page" className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/review-booking/:serviceId">
                  Find a doctor
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/my-bookings">
                  Apps
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/adding-tour-plan">
                  Testimonials
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/manage-bookings">
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* {" "}
      <nav className={parallaxNav}>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"> *
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink aria-current="page" className="nav-link" to="/#home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/#about">
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/#projects">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/#contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blogs">
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Nav;
