import React from "react";
import "./NewDeshboards.css";
import boy from "../../assets/img/boy.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendarCheck,
  faChartLine,
  faHeart,
  faHouseMedical,
  faRightFromBracket,
  faSearch,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const NewDeshboards = () => {
  const { pathname } = useLocation();
  const firstPath = pathname.split("/dashboard/")[1];

  return (
    <>
      <input type="checkbox" name="" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <span>
            {" "}
            <FontAwesomeIcon icon={faHouseMedical} />{" "}
          </span>
          <h3> Doctor Meet </h3>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <Link
                to="/dashboard/dashboarHome"
                className={firstPath === "dashboarHome" ? "active" : ""}
              >
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faChartLine} />{" "}
                </span>
                <span> Deshboard </span>{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/doctors"
                className={firstPath === "doctors" ? "active" : ""}
              >
                {" "}
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCalendarCheck} />{" "}
                </span>
                <span>Apponment</span>{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/admin"
                className={firstPath === "admin" ? "active" : ""}
              >
                {" "}
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faUserDoctor} />{" "}
                </span>
                <span> Doctors</span>{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/favdoc"
                className={firstPath === "favdoc" ? "active" : ""}
              >
                {" "}
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faHeart} />{" "}
                </span>
                <span> Favorite Doctors </span>{" "}
              </Link>
            </li>
            <li>
              <a href="">
                {" "}
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faRightFromBracket} />{" "}
                </span>
                <span> Log Out </span>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <header>
          <h1 className="h1-fs">
            <label htmlFor="nav-toggle">
              <span className="px-3">
                <FontAwesomeIcon icon={faBars} />
              </span>
            </label>
            Deshboard
          </h1>
          <div className="search-wrapper">
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input type="text" placeholder="search here" />
          </div>
          <div className="user-wrapper">
            <img
              className="img-fluid"
              src={boy}
              alt=""
              width="40px"
              height="40px"
            />
            <div>
              <h4> John Doe </h4>
              <small> user </small>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default NewDeshboards;
