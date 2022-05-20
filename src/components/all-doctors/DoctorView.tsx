import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import "./DoctorView.css";
import { Icon } from "@iconify/react";
import MapDirection from "../map-ditrection/MapDirection";

const DoctorView = () => {
  let [doctor, setDoctors] = useState<any>({});
  let [address, setAddress] = useState<any>({});
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/doctors/single/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data.data[0]);
        setAddress(data.data[0].address[0]);
      });
  }, [id]);

  return (
    <>
      <div
        className="my-5 text-center"
        style={{
          backgroundColor: "#f5f5f5",
          padding: "100px",
          marginBottom: "50px",
        }}
      >
        <h1> Doctor Details </h1>
        <span>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            Home
          </NavLink>
        </span>
        {" > "} <span> Doctor Details </span>
      </div>
      <Container className="my-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="row border ">
              <div className="col-lg-4 ps-0 ">
                <div className="">
                  <img className="img-fluid  " src={doctor?.img} alt="" />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="p-2 pb-0">
                  <h4
                    style={{
                      fontSize: "22px",
                      fontWeight: " 700",
                      letterSpacing: " 1px",
                      color: " #005963",
                    }}
                  >
                    {" "}
                    {doctor.name}{" "}
                  </h4>
                  <p>
                    <Rating
                      name="read-only"
                      value={doctor.review}
                      readOnly
                      size="small"
                      precision={0.5}
                    />
                    <span
                      className="my-auto"
                      style={{
                        color: "gray",
                        fontSize: "14px",
                        textAlign: "center",
                      }}
                    >
                      ({doctor.numberOfReview})
                    </span>
                  </p>
                  <h6 style={{ color: "#005963", fontWeight: "700" }}>
                    {" "}
                    {doctor.specialist}{" "}
                  </h6>
                  <div className="dis-text" style={{ lineHeight: "14px" }}>
                    <p>
                      {" "}
                      <span>
                        {" "}
                        <Icon icon="arcticons:phone" />{" "}
                      </span>
                      {doctor.phone}{" "}
                    </p>
                    <p>
                      {" "}
                      <span>
                        {" "}
                        <Icon icon="ic:outline-alternate-email" />{" "}
                      </span>
                      {doctor.email}{" "}
                    </p>
                    <p>
                      {" "}
                      <span>
                        {" "}
                        <Icon icon="ep:location" />{" "}
                      </span>{" "}
                      {address.street} , {address.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="all-btn-style row ">
              <button className="col-lg-4 border-0"> Overview </button>
              <button className="col-lg-4 border-0">
                {" "}
                Location & Contact{" "}
              </button>
              <button className="col-lg-4 border-0"> Review </button>
            </div>
            <div className="my-5">
              <h3 style={{ color: "#005963" }}> Overview Of {doctor.name} </h3>
              <hr />
              <div className="row">
                <div className="col-lg-6 border-right-style">
                  <ul className="ul-style-in-view">
                    <li>Full Name: {doctor.name}</li>
                    <li>User Name: {doctor.username}</li>
                    <li>Specialist: {doctor.specialist}</li>
                    <li>Emai: {doctor.email}</li>
                    <li> Phone: {doctor.phone} </li>
                    <li> Website: {doctor.website} </li>
                    <li> experience: {doctor.experience} year </li>
                  </ul>
                </div>
                <div className="col-lg-6 address-style ">
                  <h5 style={{ color: "#005963" }}> Address </h5>
                  <p>
                    {address.street} ,{address.suite} , {address.city} ,{" "}
                    {address.zipcode}
                  </p>
                  <h5 style={{ color: "#005963" }}> Appointment Day</h5>
                  <p> {doctor.appointmentDay}</p>
                </div>
              </div>
              <div className="my-5">
                <h3 style={{ color: "#005963" }}>
                  {" "}
                  {doctor.name} Location & Contact Information{" "}
                </h3>
                <hr />
                <div className="my-5">
                  <MapDirection />
                  <div className="row">
                    <div className="dr-style-con col-lg-4">
                      <p>
                        {" "}
                        <span>
                          {" "}
                          <Icon icon="arcticons:phone" />{" "}
                        </span>
                        {doctor.phone}{" "}
                      </p>
                    </div>
                    <div className="col-lg-4 dr-style-con">
                      <p>
                        {" "}
                        <span>
                          {" "}
                          <Icon icon="ic:outline-alternate-email" />{" "}
                        </span>
                        {doctor.email}{" "}
                      </p>
                    </div>
                    <div className="col-lg-4 dr-style-con">
                      <p>
                        {" "}
                        <span>
                          {" "}
                          <Icon icon="ep:location" />{" "}
                        </span>{" "}
                        {address.street} , {address.city}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </Container>
    </>
  );
};

export default DoctorView;
