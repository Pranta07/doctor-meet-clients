import React, { useEffect, useState } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "../../../redux/store";
import { removeItemsFromCart } from "../../../redux/actions/cartAction";

const PharmacyCartSingle = (props: {
  item: any;
  key: any;
  index: any;
  handleChildCartData: any;
}) => {
  let [count, setCount] = useState(1);
  const dispatch = useAppDispatch();
  useEffect(() => { }, [props.item])

  //@ts-ignore
  let handleOnClickPlus = (productId): any => {
    // console.log(productId)
    const stringCartItems = window.localStorage.getItem("cartItems");
    //@ts-ignore
    const cartItems = JSON.parse(stringCartItems)
    //@ts-ignore
    let newItems = cartItems.map((product) => {

      if (product.productId === productId) {

        product.quantity++;
        setCount(product.quantity)
      }
      return product;
    });

    window.localStorage.setItem("cartItems", JSON.stringify([...newItems]));
  };

  //@ts-ignore
  let handleONClickMinus = (productId) => {
    const stringCartItems = window.localStorage.getItem("cartItems");
    //@ts-ignore
    const cartItems = JSON.parse(stringCartItems)
    //@ts-ignore
    let newItems = cartItems.map((product) => {

      if (product.productId === productId) {

        if (product.quantity > 1) {

          product.quantity--;
          setCount(product.quantity)
        }

      }
      return product;
    });

    window.localStorage.setItem("cartItems", JSON.stringify([...newItems]));
  };

  props.handleChildCartData(count);

  return (
    <div className="col-lg-8">
      <div className=" p-3">
        <div className="d-flex justify-content-between p-4 ">
          <div className="d-flex ">
            <img
              className="img-fluid"
              width="80px"
              height="120px"
              src={props.item.image}
              alt=""
            />
            <p className="my-auto d-block"> {props.item.name}</p>
          </div>
          <p className="my-auto d-block">Price: {props.item.price} </p>
          <div>
            <div className="btn-group me-2">
              <button
                className="btn fw-bold text-size "
                onClick={() => handleONClickMinus(props.item.productId)}
              >
                {" "}
                -{" "}
              </button>{" "}
              <p id={`pid-${props.index}`} className="my-auto px-2">
                {" "}
                {count}{" "}
              </p>
              <button
                name="plus"
                className="btn fw-bold text-size "
                id={`id-${props.index}`}
                onClick={() => handleOnClickPlus(props.item.productId)}
              >
                {" "}
                +{" "}
              </button>{" "}
              <button
                name="minus"
                onClick={() => dispatch(removeItemsFromCart(props.item.productId))}
                className="btn fw-bold text-danger px-4"
              >
                {" "}
                <FontAwesomeIcon icon={faTrashCan} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyCartSingle;
