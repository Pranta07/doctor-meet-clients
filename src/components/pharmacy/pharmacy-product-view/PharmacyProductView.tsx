import { RatingStar } from "rating-star";
import React, { useEffect, useState } from "react";
import { Cart } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import "./PharmacyProductView.css";
import "../pharmacy-banner/PharmacyBanner.css";
import banner_img from "../../../assets/pharmacy/banner-sidebar.png";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { getProductDetails } from "../../../redux/actions/productAction";
import { Rating } from "@mui/material";
import { addItemsToCart } from "../../../redux/actions/cartAction";

const PharmacyProductView = () => {
  const dispatch = useAppDispatch();
  const { user }: any = useAppSelector((state) => state.user);
  // let [products, setProducts] = useState<any>({});
  let [count, setCount] = useState(1);
  const [rating1, setRating1] = React.useState<number | null>(5);

  const { product }: any = useAppSelector((state) => state.productDetails);

  let { id } = useParams();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id]);

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
  let {
    name,
    img1,
    img2,
    img3,
    img4,
    price,
    description,
    category,
    inStock,
    _id,
  } = product;

  // -----------------------------------------------------------------
  //these static data must change later
  let rating = 4;
  let Sku = "This is Sku";
  let power = "20 mg";
  let shopAddress = "chittagong, Bangladesh";
  let weight = "200 gm";

  // --------------------------------------------------------------

  let [allImg, setAllImg] = useState("");
  const getImage = (image: string) => {
    setAllImg(image);
  };

  useEffect(() => {
    const ItemList = localStorage.getItem("item");

    if (ItemList) {
      const listItems: any[] = JSON.parse(ItemList);
      const authorId = listItems.find((author) => author._id === _id);
    }
  }, [_id]);

  const addDoctor = (id: string) => {
    //save the doctor to local storage
    const doctor = localStorage.getItem("item");

    let items;
    if (doctor) items = JSON.parse(doctor);
    else items = [];

    const newItems = [...items, product];
    // console.log(newItems);

    localStorage.setItem("item", JSON.stringify([...newItems]));
  };

  let onRatingChange = () => {};

  const handleOrderReviewSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      comment: { value: string };
    };

    const User = user?._id;
    const name = target.name?.value;
    const email = target.email?.value;
    const comment = target.comment?.value;
    const rating = rating1;
    const img =
      user?.image !== ""
        ? user?.image
        : "https://walldeco.id/themes/walldeco/assets/images/avatar-default.jpg";
    // const img = "";

    const OrderReview = { User, name, email, comment, rating, img };
    console.log(OrderReview);

    //send review data to server
    fetch(`http://localhost:5000/api/v1/review`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(OrderReview),
    }).then((res) => {
      if (res.status === 200) {
        console.log("success");
      }
    });
  };

  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="product-div">
          <div className="product-div-left">
            <div className="img-containers">
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
          <div className="product-div-right">
            {inStock === true ? (
              <p className="stock-style"> inStock </p>
            ) : (
              <p className="out-style"> Out Stock </p>
            )}
            <h2>{name}</h2>
            <Rating name="rating" value={4} />
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
          <div className="d-flex justify-content-center img-start">
            <img className="img-fluid" src={banner_img} alt="" />
          </div>
        </div>
        <div className="product-discriptaion">
          <h2 className="my-5 color-h1"> Description </h2>
          <hr />
          <p className="text-color-for-p">{description}</p>
        </div>
        <div className="information row">
          <h2 className="my-5 color-h1">Additional information</h2>
          <hr />
          <div className="d-flex col-lg-6 col-md-6 border-left-for-ad">
            <ul className="color-h1 fw-for-ul-p my-3">
              <li>
                {" "}
                <p> category </p>{" "}
              </li>
              <li>
                {" "}
                <p> Power </p>{" "}
              </li>
              <li>
                {" "}
                <p> weight </p>{" "}
              </li>
            </ul>
            <div className=" fw-for-ul-p color-h1 mx-4 my-3">
              <p> {category} </p>
              <p> {power} </p>
              <p> {weight} </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 my-3">
            <h5 className="color-h1"> Address </h5>
            <p className="text-color-for-p"> {shopAddress} </p>
            <h5 className="color-h1"> Sku </h5>
            <ul>
              <li className="text-color-for-p fw-for-ul-p">
                <p> {Sku} </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="Reviews my-5">
          <div>
            <h2 className="color-h1"> Reviews </h2>
            <hr />
            <p className="text-color-for-p fw-for-ul-p">
              {" "}
              There are no reviews yet.{" "}
            </p>
          </div>
          <div className="my-5">
            <h5 className="color-h1">
              {" "}
              Be the first to review “Daily Men’s Multi Vitamins & Minerals”
            </h5>
            <p className="text-color-for-p fw-for-ul-p">
              {" "}
              Your email address will not be published. Required fields are
              marked *
            </p>
            <p
              style={{
                display: "flex",
                fontWeight: " 600",
              }}
              className="my-3"
            >
              Your Rating:{" "}
              <Rating
                name="rating"
                value={rating1}
                onChange={(event, newValue) => {
                  setRating1(newValue);
                }}
              />
            </p>
            <div className="container">
              <div className="container">
                <form onSubmit={handleOrderReviewSubmit}>
                  <div className="mb-3 row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name *"
                        required
                        name="name"
                        readOnly
                        defaultValue={user?.name}
                        aria-label="First name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email *"
                        aria-label=""
                        readOnly
                        defaultValue={user?.email}
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      name="comment"
                      id="exampleFormControlTextarea1"
                      placeholder="Your Reviw *"
                      style={{ height: "100px" }}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-style">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyProductView;
