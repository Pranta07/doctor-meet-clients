import { Rating} from "@mui/material";
import React from "react";


const DoctorReview = ({ review }: any) => {

  let { name, email, rating, feedback} = review;

  return (
    <div className="row mx-3" >
      <div className="col-lg-3 ps-0 my-3">
        <img
          className="img-fluid"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          alt=""
          width="150px"
          height="150px"
        />
      </div>
      <div className="col-lg-9  all-doc-rev ">
        <div className="d-flex justify-content-between">
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
          <p className="my-auto">
            "{feedback}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorReview;
