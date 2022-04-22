import React from "react";
import "./Pharmecy_Banner.css";
import Pharma_3 from "../../../Assets/Pharmecy/banner-3-1.jpg";
import Pharma_4 from "../../../Assets/Pharmecy/banner-4.jpg";
import Pharma_5 from "../../../Assets/Pharmecy/banner-5-1.jpg";
import pharma_Txt_1 from "../../../Assets/Pharmecy/heart-rate.png";
import pharma_text_2 from "../../../Assets/Pharmecy/banner-3-text.png";
import pharma_text_3 from "../../../Assets/Pharmecy/banner-4-text.png";
import pharma_text_4 from "../../../Assets/Pharmecy/banner-5-text.png";
import pro_1 from "../../../Assets/Pharmecy/creams.png";
import pro_2 from "../../../Assets/Pharmecy/pills.png";
import pro_3 from "../../../Assets/Pharmecy/herbs.png";
import pro_4 from "../../../Assets/Pharmecy/capsules.png";
import pro_5 from "../../../Assets/Pharmecy/prescription.png";
import pro_6 from "../../../Assets/Pharmecy/drops.png";
import { NavLink } from "react-router-dom";

const Pharmecy_Banner = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-7 ">
          <div className="back-img-1">
            <h1 className="text-light h1-big mb-3">
              Focused <br /> <span> by Fredi</span>{" "}
            </h1>
            <p className="text-light p-big">Only in this week. Don’t misss!</p>
            <h2 className="h1-big" style={{ color: "#ff7f23" }}>
              $15.99{" "}
              <span className="h1-none mb-auto" style={{ color: "#00a198" }}>
                {" "}
                <del> $29.99 </del>{" "}
              </span>
            </h2>
            <NavLink style={{textDecoration:'none'}} to="/shop">
            <button className=" btn-style mt-3"> Shop Now </button>
            </NavLink>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 ">
          <div className="back-img-2">
            <p style={{ marginBottom: "5px" }}>
              <span className="new-style"> NEW </span>
            </p>
            <h2 className="power-style">
              Power Effect <br /> <span> Pro Series </span>{" "}
            </h2>
            <h2 className="h1-big">
              <span>
                <img className="img-fluid" src={pharma_Txt_1} alt="" />
              </span>
            </h2>
            <NavLink style={{textDecoration:'none'}} to="/shop">
              <button className="btn-style btn-style-2">Shop now</button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 mt-4 col-md-4 ">
        <NavLink style={{textDecoration:'none'}} to="/shop">
          <div className="ts-banner-image left-center ">
            <div className="image-link img-hover-zoom">
              <img className="img-fluid img bg-img" src={Pharma_3} alt="" />
              <img
                className=" text-image text-fluid"
                src={pharma_text_2}
                alt=""
              />
            </div>
          </div>
          </NavLink>
        </div>
        <div className="col-lg-4 mt-4  col-md-4">
        <NavLink style={{textDecoration:'none'}} to="/shop">
          <div className="ts-banner-image left-center ">
            <div className="image-link img-hover-zoom">
              <img className="img-fluid img bg-img" src={Pharma_4} alt="" />
              <img
                className=" text-image text-fluid "
                src={pharma_text_3}
                alt=""
              />
            </div>
          </div>
          </NavLink>
        </div>
        <div className="col-lg-4 mt-4 col-md-4 ">
        <NavLink style={{textDecoration:'none'}} to="/shop">
          <div className="ts-banner-image left-center ">
            <div className="image-link img-hover-zoom">
              <img className="img-fluid img bg-img" src={Pharma_5} alt="" />
              <img
                className="text-image text-fluid "
                src={pharma_text_4}
                alt=""
              />
            </div>
          </div>
          </NavLink>
        </div>
      </div>
      <div>
        <h1 className="text-h4 text-center mt-5 mb-4 ">Shop by product type</h1>
      </div>
      <div className="row grid-res ">
        <div className="col-lg-2 col-md-3 col-sm-6 mt-3 ">
          <h6 className="text-center product-style ">
            {" "}
            <img className="img-fluid" src={pro_1} alt="" /> Cream{" "}
          </h6>
        </div>
        <div className="col-lg-2  col-md-3 col-sm-6 mt-3">
          <h6 className="text-center product-style ">
            {" "}
            <img className="img-fluid" src={pro_2} alt="" /> Pills{" "}
          </h6>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 mt-3">
          <h6 className="text-center product-style ">
            {" "}
            <img className="img-fluid" src={pro_3} alt="" /> Herbs{" "}
          </h6>
        </div>
        <div className="col-lg-2  col-md-3 col-sm-6 mt-3">
          <h6 className="text-center product-style ">
            <img className="img-fluid" src={pro_4} alt="" /> Capsules
          </h6>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 mt-3">
          <h6 className="text-center product-style ">
            {" "}
            <img className="img-fluid" src={pro_5} alt="" /> Prescription{" "}
          </h6>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 mt-3">
          <h6 className="text-center product-style ">
            {" "}
            <img className="img-fluid" src={pro_6} alt="" /> Drops{" "}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Pharmecy_Banner;
