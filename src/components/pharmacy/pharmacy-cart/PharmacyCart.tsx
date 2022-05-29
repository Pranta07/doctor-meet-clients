import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/store";
import "./PharmacyCart.css";
import PharmacyCartSingle from "./PharmacyCartSingle";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));
const PharmacyCart = () => {
  let cartTotal = 1;
  const handleChildCartData = (cartData: any) => {
    cartTotal = cartTotal + cartData;
  };
  const { cartItems } = useAppSelector((state) => state.cart);

  let [tax, setTax] = useState(0);

  return (
    <>
      <div
        className="my-5 text-center "
        style={{ backgroundColor: "#f5f5f5", padding: "100px" }}
      >
        <h1> Cart </h1>
        <span> Home </span> <span> {">"} </span> <span> Cart </span>
      </div>
      <div className="container position-style my-5">
        <div className="row my-all">
          <h3> Order </h3>
          {
            //@ts-ignore
            cartItems.map((item, index) => (
              //@ts-ignore
              <PharmacyCartSingle
                item={item}
                index={index}
                key={item.productId}
                handleChildCartData={handleChildCartData}
              ></PharmacyCartSingle>
            ))
          }
          <div className="col-lg-4 position-set">
            <div className="box-shadow p-3">
              <h5 className="line-h"> Payment Summary </h5>
              <hr className="hr-style" />
              <div className=" d-flex justify-content-between my-3 p-1">
                <div className=" ">
                  <p> Quantity </p>
                  <p> Order Summary </p>
                  <p> Tax </p>
                  <p> Total Amount </p>
                </div>
                <div className="">
                  <p> {cartTotal} </p>
                  <p> $299 </p>
                  <p> ${tax} </p>
                  <p> $309 </p>
                </div>
              </div>
              <hr className="hr-style" />
              <div className=" d-flex mt-3 p-2">
                {/* When data is static */}
                <Link to="/pharmacy-payment">
                  <button className="btn btn-outline-primary mx-2">
                    Proceed Pay
                  </button>
                </Link>

                {/* When data is dynamic */}
                {/* <Link to=`/pharmacy-payment/${orderid}`><button className="btn btn-outline-primary mx-2"> Pay</button></Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PharmacyCart;
