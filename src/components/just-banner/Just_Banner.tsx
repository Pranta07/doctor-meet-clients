import React from "react";
import just_banner from "./../../Assets/img/just_Banner.png";
import "./Just_Banner.css";

const Just_Banner = () => {
  return (
    <div className="container margin-top-banner ">
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-6 custom-bot my-auto mx-auto">
          <h1 className="just-width"> Virtual healthcare for you </h1>
            <p className="text-muted just-width">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone <br />
            <button className="btn btn-color rounded-pill my-5 ">
              Consult today
            </button>
            </p>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img className="img-fluid" src={just_banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Just_Banner;
