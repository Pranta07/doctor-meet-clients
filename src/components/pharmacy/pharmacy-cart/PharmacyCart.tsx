import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./PharmacyCart.css";
import PharmacyCartSingle from "./PharmacyCartSingle";

const PharmacyCart = () => {
  let cartTotal = 1;
  const handleChildCartData = (cartData: any) => {
    cartTotal = cartTotal + cartData;
  };

  let [tax, setTax] = useState(0);
  let [itemData, setItemData] = useState<any[]>([]);

  useEffect(() => {
    const doctorList = localStorage.getItem("item");
    if (doctorList) {
      const data = JSON.parse(doctorList);
      setItemData(data);
      console.log(data);
    }
  }, []);

  const removeDoctor = (id: string) => {
    //remove the doctor from local storage
    const doctor = localStorage.getItem("item");

    let items: any[];
    if (doctor) items = JSON.parse(doctor);
    else items = [];

    const newItems = items.filter((author) => author._id !== id);
    // console.log(newItems);
    setItemData(newItems);
    localStorage.setItem("item", JSON.stringify([...newItems]));
  };

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
          {itemData.map((item, index) => (
            <PharmacyCartSingle
              item={item}
              index={index}
              removeDoctor={removeDoctor}
              handleChildCartData={handleChildCartData}
            ></PharmacyCartSingle>
          ))}
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
                <input
                  className="form-control"
                  type="text"
                  placeholder="Coupon Code"
                />{" "}
                <button className="btn btn-outline-primary mx-2"> Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PharmacyCart;
