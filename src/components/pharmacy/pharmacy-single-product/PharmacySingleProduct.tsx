import { Box, Modal, Rating } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Cart, Search } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import "../pharmacy-product-view/PharmacyProductView.css";
import "./PharmacySingleProduct.css";
import { useAppDispatch } from "../../../redux/store";
import { addItemsToCart } from "../../../redux/actions/cartAction";

import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  backgroundColor: theme.palette.background.default,
}));
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: " 60%",
  p: 4,
};

const PharmacySingleProduct = (props: any) => {
  const dispatch = useAppDispatch();
  let [count, setCount] = useState(1);


  let {
    name,
    rating,
    price,
    description,
    category,
    img1,
    img2,
    img3,
    img4,
    inStock,
    _id,
  }: any = props.product;

  useEffect(() => {
  }, [_id]);

  let handleOnClickPlus = () => {
    let total = count + 1;
    setCount(total);
  };

  let handleONClickMinus = () => {
    if (count < 1) {
      return;
    } else {
      let total = count - 1;
      setCount(total);
    }
  };
  let [allImg, setAllImg] = useState("");
  const getImage = (image: string) => {
    setAllImg(image);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <RootStyle className="col-lg-2 col-md-3 col-sm-6 p-0">
      <div className="product p-4">
        <div className="product-img">
          <img className="img-fluid" src={img1} alt="front product" />
          <img src={img2} alt="rear product" className="rear-img img-fluid " />
          <div className="overlay">
            <button
              onClick={() => dispatch(addItemsToCart(_id, count))}
              className="btn"
              title="Add to Cart"
            >
              {" "}
              <Cart></Cart>{" "}
            </button>
            <button onClick={handleOpen} className="btn" title="Quick View">
              {" "}
              <Search></Search>{" "}
            </button>
          </div>
        </div>
        <NavLink style={{ textDecoration: "none" }} to={`/medicine/${_id}`}>
          <div className="product-info my-4">
            <div>
              <p className="product-name">{name}</p>
              <h5 className="product-price">${price}</h5>
              <Rating name="rating" value={4} />

            </div>
          </div>
        </NavLink>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            <div className="container" id="modal-modal-title">
              <div className="product-div-for-quick">
                <div className="product-div-left">
                  <div className="img-container">
                    {allImg === "" ? (
                      <img src={img1} alt="" />
                    ) : (
                      <img className="img-fluid" src={allImg} alt="" />
                    )}
                  </div>
                  <div className="hover-container">
                    <div>
                      <img
                        onClick={() => {
                          getImage(img1);
                        }}
                        className="img-fluid"
                        src={img1}
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        onClick={() => {
                          getImage(img2);
                        }}
                        className="img-fluid"
                        src={img2}
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        onClick={() => {
                          getImage(img3);
                        }}
                        className="img-fluid"
                        src={img3}
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        onClick={() => {
                          getImage(img4);
                        }}
                        className="img-fluid"
                        src={img4}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="product-div-right" id="modal-modal-description">
                  {inStock === true ? (
                    <p className="stock-style"> inStock </p>
                  ) : (
                    <p className="out-style"> Out Stock </p>
                  )}
                  <h2>{name}</h2>
                  <Rating name="rating" value={parseInt(rating)} />

                  <hr />
                  <h5 className="product-price">${price}</h5>
                  <h6 className="mt-5"> Quantity </h6>
                  <div className="btn-group btn-style-count me-2 ">
                    <button
                      className="btn fw-bold text-size "
                      onClick={handleONClickMinus}
                    >
                      {" "}
                      -{" "}
                    </button>{" "}
                    <p className="my-auto px-2"> {count} </p>
                    <button
                      className="btn fw-bold text-size "
                      onClick={handleOnClickPlus}
                    >
                      {" "}
                      +{" "}
                    </button>{" "}
                  </div>
                  <button
                    onClick={() => dispatch(addItemsToCart(_id, count))}
                    className="btn-style"
                  >
                    {" "}
                    <Cart></Cart> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </RootStyle>
  );
};

export default PharmacySingleProduct;
