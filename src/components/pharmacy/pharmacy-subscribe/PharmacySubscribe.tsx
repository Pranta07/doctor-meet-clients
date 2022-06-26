import React from "react";
import "./PharmacySubscribe.css";
import blog_img from "../../../assets/pharmacy/blog13.jpg";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));
const PharmacySubscribe = () => {
  return (
    <RootStyle className="container margin-Y ">
      <div className="">
        <div className="blogs items row">
          <div className="col-lg-6 item ">
            <div className="thumbnail-content">
              <div className="thumbnail">
                <img className="img-fluid img" src={blog_img} alt="" />
              </div>
              <div className="entry-content ">
                <h4 className="heading-title entry-title">
                  {" "}
                  The latest tests of popular masks in accordance with CV2s
                  standards{" "}
                </h4>
                <div className="entry-meta-middle">
                  <span className="data-time"> May 22, 2021 </span>
                  <span className="name-author mx-3">Alfredo Austin</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-5 bg-color-for-sub">
            <div className="">
              <div>
                <h1>
                  {" "}
                  Join our newsletter and get $20 discount for your first order{" "}
                </h1>
                <p className="my-5"> Only for your first order </p>
              </div>
              <div>
                <input
                  className="input-style form-control mr-sm-2"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  id=""
                />{" "}
                <button className="btn-style mx-2"> Subscribe </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootStyle>
  );
};

export default PharmacySubscribe;
