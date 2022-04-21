import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Pharmecy_cart.css";

const Pharmecy_cart = () => {
  let [count, setCount] = useState(1);
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
    setItemData(newItems)
    localStorage.setItem("item", JSON.stringify([...newItems]));
  };

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
          {itemData.map((item) => (
            <div className="col-lg-8">
              <div className=" p-3">
                <div className="d-flex justify-content-between p-4 ">
                  <div className="d-flex ">
                    <img
                      className="img-fluid"
                      width="60px"
                      height="60px"
                      src={item.img1+'.jpg'}
                      alt=""
                    />
                    <p className="my-auto d-block"> {item.name}</p>
                  </div>
                  <p className="my-auto d-block">Price: {item.price} </p>
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
                      <button onClick={()=>removeDoctor(item._id)} className="btn fw-bold text-danger px-4">
                        {" "}
                        <FontAwesomeIcon icon={faTrashCan} />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  <p> {count} </p>
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

export default Pharmecy_cart;
