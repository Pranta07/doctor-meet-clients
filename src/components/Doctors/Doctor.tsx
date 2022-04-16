import React from "react";
import {
  AiFillStar,
  AiOutlineCalendar,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const borderColFilter = {
  backgroundColor: "#ebf2f3",
  color: "#005963",
  fontWeight: "bold",
  fontSize: "20px",
  border: "0",
};
const bordrCol = {
  border: "solid 1px ",
  color: "#ecf8f9",
  borderRadius: "5px",
};
const fontCol = {
  color: "#686a6f",
  fontSize: "16px",
};
const fontColDoc = {
  color: "#005963",
};
const btnStyle = {
  backgroundColor: "#00acb1",
  border: "0",
  color: "#fff",
  padding: "10px",
  borderRadius: "5px",
  fontWeight: "bold",
};

export interface doctorData {
  _id: string;
  name: string;
  email: string;
  gender: string;
  status: string;
  experience: string;
  specialist: string;
  img: string;
  address: {
    city: string;
    suite: string;
    street: string;
  };
}
type Props = {
  doctorData: doctorData;
};
const Doctor: React.FC<Props> = ({ doctorData }) => {
  const { _id, name, email, img, address, experience, specialist } = doctorData;
  return (
    <div className="row row-cols-1 mb-5">
      <div className="col">
        <div className="card">
          <div
            className="row row-cols-1 row-cols-md-3  rounded g-0"
            style={bordrCol}
          >
            <div className="col-12 col-md-3">
              <img
                src={img}
                className="img-fluid h-100 w-100 rounded-start"
                alt=""
              />
            </div>

            <div
              className="col-6 col-md-5"
              style={{
                color: "#ecf8f9",
                borderRight: "1px solid ",
              }}
            >
              <div className="card-body">
                <h5 style={fontColDoc} className="card-title">
                  {name} <br />
                </h5>
                <h6 style={fontColDoc} className="card-title">
                  {specialist}
                </h6>
                <p className="card-text" style={fontCol}>
                  {email}
                </p>
                <p className="card-text">
                  <button style={btnStyle}>VIEW MORE</button>
                  <button
                    className="ms-2"
                    style={{
                      backgroundColor: "#fff",
                      border: "solid 1px",
                      color: "#00acb1",
                      padding: "10px",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                    </svg>
                  </button>
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <i
                  className="bi-alarm"
                  style={{ fontSize: "2rem", color: "cornflowerblue" }}
                ></i>{" "}
                <h6 className="card-text" style={fontCol}>
                  <span
                    className="me-2"
                    style={{
                      color: "#00acb1",
                    }}
                  >
                    <IoLocationOutline />
                  </span>
                  {address.street},{address.city} <br />
                  <br />
                  <span
                    className="me-2"
                    style={{
                      color: "#00acb1",
                    }}
                  >
                    <AiOutlineSafetyCertificate />
                  </span>
                  {experience} Yrs Experience <br />
                  <br />
                  <span
                    className="me-2"
                    style={{
                      color: "#00acb1",
                    }}
                  >
                    <AiOutlineCalendar />
                  </span>
                  Tue, Wed, Thu, Fri,
                </h6>
                <br />
                <p className="card-text text-dark">
                  <span style={{ color: "orange" }}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                  (3)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;

// <div>
//   <img src={img} alt="" />
//   <p>{name}</p>
//   <p>{email}</p>
//   <p>
//     {address.suite},{address.street},{address.city}
//   </p>
// </div>
