import "bootstrap";
import React, { useEffect, useState } from "react";
// import "./Nav.css";
// import { HashLink } from "react-router-hash-link";
const Nav = () => {
  const [offset, setOffset] = useState(0);
  const parallaxNav =
    offset < 100
      ? "navbar navbar-b navbar-expand-md fixed-top"
      : "navbar navbar-b navbar-light bg-light navbar-expand-md fixed-top";
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <>
      {" "}
      <nav className={parallaxNav}>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"> */}
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/">
                Features
              </a>
              <a className="nav-link" href="/">
                Pricing
              </a>
              <a className="nav-link disabled" href="/" aria-disabled="true">
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav className={parallaxNav}>
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <a className="navbar-brand js-scroll" href="/">
              <img src="logo.png" alt="" />{" "}
              <span style={{ fontWeight: "700" }}>Doctors Meet Up</span>
            </a>
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
      </nav> */}
    </>
  );
};

export default Nav;
