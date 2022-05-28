import { Rating } from "@mui/material";
import React from "react";


const PharmacyOrderReview = ({ review }: any) => {
  let { name, email, rating, comment } = review;

  return (
    <div className="row container mx-3">
      <div className="col-lg-2 ps-0 my-3">
        <img
          className="img-fluid"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt=""
          width="150px"
          height="150px"
        />
      </div>
      <div
        style={{
          display: " flex",
          flexDirection: "column",
          justifyContent: " center",
        }}
        className="col-lg-10 all-doc-rev "
      >
        <div>
          <div className="d-flex align-items-center">
            <h5 className="me-3"> {name} </h5>
            <Rating
              name="read-only"
              value={parseInt(rating)}
              readOnly
              size="small"
              precision={0.5}
            />
          </div>
          <p> {email} </p>
        </div>
        <div>
          <p className="my-auto">"{comment}"</p>
        </div>
      </div>
    </div>
  );
};

export default PharmacyOrderReview;
