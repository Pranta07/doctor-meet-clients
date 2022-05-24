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
  let [totalCart, setTotalCart] = useState(1);
  const dispatch = useAppDispatch();
  console.log(props.item)
  useEffect(() => { }, [props.item])

  let handleOnClickPlus = () => {
    let total = count + 1;
    setCount(total);
    props.handleChildCartData(total);
  };

  let handleONClickMinus = () => {
    if (count < 1) {
      return;
    } else {
      let total = count - 1;
      setCount(total);
    }
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
                onClick={handleONClickMinus}
              >
                {" "}
                -{" "}
              </button>{" "}
              <p id={`pid-${props.index}`} className="my-auto px-2">
                {" "}
                {count}{" "}
              </p>
              <button
                className="btn fw-bold text-size "
                id={`id-${props.index}`}
                onClick={handleOnClickPlus}
              >
                {" "}
                +{" "}
              </button>{" "}
              <button
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
