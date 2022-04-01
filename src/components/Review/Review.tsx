import React from "react";
import "./Review.css";

import review_img from "./../../Assets/img/review-img.png";

const Review = () => {
  return (
    <div className="container">
      <div className="review-bg">
        <h3 className="text-center "> What our customer are saying </h3>
        <hr className="hr-re mx-auto " />
        <div className="row container re-dot p-5">
          <div className="d-flex col-6 ">
            <img
              className="rounded-circle img-fluid border-rev "
              src={review_img}
              alt=""
            />
            <div className="my-auto mx-4">
              <h6>Edward Newgate</h6>
              <p> Founder Circle </p>
            </div>
          </div>
          <div className="col-6 my-auto">
            <p className="w-75" >
              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
