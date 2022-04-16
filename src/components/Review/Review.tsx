import React from 'react';
import review_img from './../../Assets/img/review-img.png';
import './Review.css';

const Review = () => {
  return (
    <div className="container mb-for-r">
      <div className="review-bg">
        <h3 className="text-center mb-4 "> What our customer are saying </h3>
        <hr className="hr-re mx-auto " />
        <div className="row re-dot p-5">
          <div className="d-flex col-lg-6 col-sm-12 col-md-12 ">
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
          <div className="col-lg-6 col-sm-12 col-md-12 mt-4">
            <p className=" my-auto">
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
