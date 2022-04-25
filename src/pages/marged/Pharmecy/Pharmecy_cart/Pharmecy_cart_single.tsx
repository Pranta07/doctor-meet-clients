import React, { useState } from 'react';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pharmecy_cart_single = (props: { item: any, index: any, removeDoctor: any, handleChildCartData:any }) => {
  
    let [count, setCount] = useState(1);
    let[totalCart,setTotalCart]=useState(1);
    let handleOnClikplus = () => {
        let total = count + 1;
        setCount(total)
        props.handleChildCartData(total)

    }

    let handleONClickMinas = () => {
        if (count < 1) {
            return;
        } else {
            let total = count - 1;
            setCount(total);
        }
    }

    props.handleChildCartData(count)

    return (
        <div className="col-lg-8">
            <div className=" p-3">
                <div className="d-flex justify-content-between p-4 ">
                    <div className="d-flex ">
                        <img
                            className="img-fluid"
                            width="60px"
                            height="60px"
                            src={props.item.img1 + '.jpg'}
                            alt=""
                        />
                        <p className="my-auto d-block"> {props.item.name}</p>
                    </div>
                    <p className="my-auto d-block">Price: {props.item.price} </p>
                    <div>
                        <div className="btn-group me-2">
                            <button
                                className="btn fw-bold text-size "
                                onClick={handleONClickMinas}
                            >
                                {" "}
                                -{" "}
                            </button>{" "}
                            <p id={`pid-${props.index}`} className="my-auto px-2"> {count} </p>
                            <button
                                className="btn fw-bold text-size "
                                id={`id-${props.index}`}
                                onClick={handleOnClikplus}
                            >
                                {" "}
                                +{" "}
                            </button>{" "}
                            <button onClick={() => props.removeDoctor(props.item._id)} className="btn fw-bold text-danger px-4">
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

export default Pharmecy_cart_single;