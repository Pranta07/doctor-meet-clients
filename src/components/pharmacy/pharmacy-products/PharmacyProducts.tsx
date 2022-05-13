/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import PharmacySingleProduct from "../pharmacy-single-product/PharmacySingleProduct";
import PharmacyTimer from "../pharmacy-timer/PharmacyTimer";
import "./PharmacyProducts.css";
import Pharma_3 from "../../../assets/pharmacy/banner-6.png";
import Pharma_4 from "../../../assets/pharmacy/banner-7-1.jpg";
import Pharma_5 from "../../../assets/pharmacy/banner-8-1.jpg";
import Pharma_6 from "../../../assets/pharmacy/banner-9.jpg";
import Pharma_7 from "../../../assets/pharmacy/banner-10.jpg";
import Pharma_8 from "../../../assets/pharmacy/banner-11.jpg";
import Pharma_9 from "../../../assets/pharmacy/banner-12.jpg";
import pharma_text_2 from "../../../assets/pharmacy/banner-6-text.png";
import pharma_text_3 from "../../../assets/pharmacy/banner-7-text.png";
import pharma_text_4 from "../../../assets/pharmacy/banner-8-text.png";
import pharma_text_5 from "../../../assets/pharmacy/banner-9-text.png";
import pharma_text_6 from "../../../assets/pharmacy/banner-10-text.png";
import pharma_text_7 from "../../../assets/pharmacy/banner-11-text.png";
import pharma_text_8 from "../../../assets/pharmacy/banner-12-text.png";
import PharmacyCardSlider from "../pharmacy-card-slider/PharmacyCardSlider";
import PharmacyBestProduct from "../pharmacy-best-product/PharmacyBestProduct";
import { Link } from "react-router-dom";

export interface productsType {
  Sku: string;
  category: string;
  description: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  inStock: boolean;
  name: string;
  power: string;
  price: number;
  rating: number;
  shopAddress: string;
  weight: string;
  _id: string;
}

const PharmacyProducts = () => {
  let [products, setProducts] = useState<productsType[]>([]);
  const time = new Date();
  time.setSeconds(time.getMonth() + 19890);

  useEffect(() => {
    fetch("https://immense-beyond-64415.herokuapp.com/medicine/all")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.result);
        console.log(data);
      });
  }, []);

  return (
    <div className="container">
      <h1 className=" text-center my-5"> Latest products </h1>
      <div className="row">
        {products.slice(0, 12).map((product) => (
          <PharmacySingleProduct
            key={product._id}
            products={product}
          ></PharmacySingleProduct>
        ))}
      </div>
      <div>
        <h1 className="text-center mt-5"> This week deals </h1>
      </div>
      <div className="row">
        <div className="col-lg-4 mt-4 col-md-6 ">
          <Link to="/shop">
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
          </Link>
        </div>
        <div className="col-lg-4 mt-4 col-md-6">
          <Link to="/shop">
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
          </Link>
        </div>
        <div className="col-lg-4 mt-4 col-md-12 ">
          <Link to="/shop">
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
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 mt-4 col-md-6 ">
          <Link to="/shop">
            <div className="ts-banner-image left-center ">
              <div className="image-link img-hover-zoom">
                <img className="img-fluid img bg-img" src={Pharma_6} alt="" />
                <img
                  className=" text-image text-fluid"
                  src={pharma_text_5}
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 mt-4  col-md-6">
          <Link to="/shop">
            <div className="ts-banner-image left-center ">
              <div className="image-link img-hover-zoom">
                <img className="img-fluid img bg-img" src={Pharma_7} alt="" />
                <img
                  className=" text-image text-fluid "
                  src={pharma_text_6}
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 mt-4 col-md-6 ">
          <Link to="/shop">
            <div className="ts-banner-image left-center ">
              <div className="image-link img-hover-zoom">
                <img className="img-fluid img bg-img" src={Pharma_8} alt="" />
                <img
                  className="text-image text-fluid "
                  src={pharma_text_7}
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3 mt-4 col-md-6 ">
          <Link to="/shop">
            <div className="ts-banner-image left-center ">
              <div className="image-link img-hover-zoom">
                <img className="img-fluid img bg-img" src={Pharma_9} alt="" />
                <img
                  className="text-image text-fluid "
                  src={pharma_text_8}
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <PharmacyTimer expiryTimestamp={time}></PharmacyTimer>
      </div>
      <div className="row">
        {products.slice(0, 6).map((product) => (
          <PharmacyCardSlider
            key={product._id}
            products={product}
          ></PharmacyCardSlider>
        ))}
      </div>
      <div>
        <h1 className="text-center my-5"> Bestsellers </h1>
      </div>
      <div className="row">
        {products.slice(0, 6).map((product) => (
          <PharmacyBestProduct
            key={product._id}
            products={product}
          ></PharmacyBestProduct>
        ))}
      </div>
    </div>
  );
};

export default PharmacyProducts;
