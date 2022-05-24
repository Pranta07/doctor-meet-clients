import React, { useEffect, useState } from "react";
import { RatingStar } from "rating-star";
import { Cart, Heart, Search } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import { useAppDispatch } from "../../../redux/store";
import { addItemsToCart } from "../../../redux/actions/cartAction";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  backgroundColor: theme.palette.background.default,
}));
// let getData = () => {
//   let data = localStorage.getItem("item");
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// };

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: " 60%",
  p: 4,
};

const PharmacyCardSlider = (props: any) => {
  // let [itemData, setItemData] = useState(getData());

  const dispatch = useAppDispatch();
  let [count, setCount] = useState(1);

  let { name, img1, img2, img3, img4, price, inStock, _id } = props.product;

  //danger
  let rating = 4.5;

  useEffect(() => {
    // const ItemList = localStorage.getItem("item");
    // if (ItemList) {
    //   const listItems: any[] = JSON.parse(ItemList);
    //   const authorId = listItems.find((author) => author._id === _id);
    // }
  }, [_id]);

  // const addMedicine = (id: string) => {
  //   //save the medicine to local storage
  //   const medicine = localStorage.getItem("item");

  //   let items;
  //   if (medicine) items = JSON.parse(medicine);
  //   else items = [];

  //   const newItems = [...items, props.products];

  //   localStorage.setItem("item", JSON.stringify([...newItems]));
  // };
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
            <button className="btn" title="Wishlit">
              {" "}
              <Heart></Heart>{" "}
            </button>
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
              <RatingStar
                size={16}
                maxScore={5}
                colors={{ mask: "#ff7f23" }}
                id="123"
                rating={rating}
              />
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
                  <RatingStar
                    size={16}
                    maxScore={5}
                    colors={{ mask: "#ff7f23" }}
                    id="123"
                    rating={rating}
                  />
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

export default PharmacyCardSlider;
