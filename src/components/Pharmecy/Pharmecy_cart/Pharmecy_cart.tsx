import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Pharmecy_cart.css";

const Pharmecy_cart = () => {
  let [count, setCount] = useState(1);
  let handleOnClikplus = () => {
    let total = count + 1;
    setCount(total);
  };

  let handleONClickMinas = () => {
    if (count < 1) {
      return;
    } else {
      let total = count - 1;
      setCount(total);
    }
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="box-shadow p-3">
            <h3> Order </h3>
            <hr className="hr-style" />
            <div className="d-flex justify-content-between p-4 ">
              <div className="d-flex ">
                <img
                  className="img-fluid"
                  width="60px"
                  height="60px"
                  src="https://i.ibb.co/6WJxNxs/25.jpg"
                  alt=""
                />
                <p className="my-auto d-block"> Pharmpro three exp+</p>
              </div>
              <p className="my-auto d-block">Price: $299 </p>
              <div>
                <div className="btn-group me-2">
                  <button
                    className="btn fw-bold text-size "
                    onClick={handleONClickMinas}
                  >
                    {" "}
                    -{" "}
                  </button>{" "}
                  <p className="my-auto px-2"> {count} </p>
                  <button
                    className="btn fw-bold text-size "
                    onClick={handleOnClikplus}
                  >
                    {" "}
                    +{" "}
                  </button>{" "}
                  <button className="btn fw-bold text-danger px-4">
                    {" "}
                    <FontAwesomeIcon icon={faTrashCan} />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="box-shadow p-3">
            <h5 className="line-h"> Payment Summary </h5>
            <hr className="hr-style" />
            <div className="p-3 d-flex">
              <input
                className="form-control"
                type="text"
                placeholder="Copon Code"
              />{" "}
              <button className="btn btn-outline-primary mx-2"> Apply</button>
            </div>
            <hr className="hr-style" />
            <div className=" d-flex justify-content-between my-3 p-1">
              <div className=" ">
                <p> Order Summary </p>
                <p> Tax </p>
                <p> Total Amount </p>
              </div>
              <div className="">
                <p> $299 </p>
                <p> $10 </p>
                <p> $309 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmecy_cart;
