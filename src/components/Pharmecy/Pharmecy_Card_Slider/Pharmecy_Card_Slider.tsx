import React, { useEffect, useState } from "react";
import { RatingStar } from "rating-star";
import { Cart, Heart, Search } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { Box, Modal } from "@mui/material";

let getData = () => {
  let data = localStorage.getItem("item");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width:"60%",
  height:' 60%',
  p: 4,
};


const Phamecy_Card_slider = (props: any) => {
  let [itemData, setItemData] = useState(getData());
  let [count, setCount] = useState(1);

  let {
    name,
    img1,
    img2,
    img3,
    rating,
    img4,
    price,
    description,
    Sku,
    category,
    inStock,
    power,
    shopAddress,
    weight,
    _id,
  } = props.products;

  useEffect(() => {
    const ItemList = localStorage.getItem("item");

    if (ItemList) {
      const listItems: any[] = JSON.parse(ItemList);
      const authorId = listItems.find((author) => author._id === _id);
    }
  }, [_id]);

  const addmedicine = (id: string) => {
    //save the medicine to local storage
    const medicine = localStorage.getItem("item");

    let items;
    if (medicine) items = JSON.parse(medicine);
    else items = [];

    const newItems = [...items, props.products];
    // console.log(newItems);

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
  let [allimg, setAllimg] = useState("");
  const getImage = (image: string) => {
    setAllimg(image);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="col-lg-2 col-md-3 col-sm-6 p-0">
      <div className="product p-4">
        <div className="product-img">
          <img
            className="img-fluid"
            src={img1 + ".jpg"}
            alt="front product image"
          />
          <img
            src={img2}
            alt="rear product image"
            className="rear-img img-fluid "
          />
          <div className="overlay">
            <button className="btn" title="Wishlit">
              {" "}
              <Heart></Heart>{" "}
            </button>
            <button
              onClick={() => addmedicine(_id)}
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
                    {allimg === "" ? (
                      <img src={img1 + ".jpg"} alt="" />
                    ) : (
                      <img className="img-fluid" src={allimg} alt="" />
                    )}
                  </div>
                  <div className="hover-container">
                    <div>
                      <img
                        onClick={() => {
                          getImage(img1 + ".jpg");
                        }}
                        className="img-fluid"
                        src={img1 + ".jpg"}
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
                  </div>
                  <button onClick={() => addmedicine(_id)} className="btn-style">
                    {" "}
                    <Cart></Cart> Add to cart
                  </button>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Phamecy_Card_slider;
