import { RatingStar } from "rating-star";
import React, { useEffect, useState } from "react";
import { Cart } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import "./Pharmecy_product_view.css";
import banner_img from "../../../Assets/Pharmecy/banner-sidebar.png";
// import required modules
// import { Autoplay, Navigation, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// // import "swiper/modules/navigation/navigation.min.css";
// // import "swiper/modules/pagination/pagination.min.css";
// import { Swiper, SwiperSlide } from "swiper/react";

const Pharmecy_product_view = () => {
  let [products, setProducts] = useState<any>({});
  let [count, setCount] = useState(1);
  let { id } = useParams();
  useEffect(() => {
    fetch(`https://immense-beyond-64415.herokuapp.com/medicine/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setProducts(data.result[0]);
      });
  }, [id]);

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
  } = products;
  let [allimg, setAllimg] = useState("");
  const getImage = (image: string) => {
    setAllimg(image);
  };
  let [rating1, setRating1] = useState(0);

  let onRatingChange = () => {};

  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="product-div">
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
          <div className="product-div-right">
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
            <button className="btn-style">
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
            <p className="text-color-for-p fw-for-ul-p">
              {" "}
              Your Rating:{" "}
              <RatingStar
                clickable
                maxScore={5}
                id="123"
                rating={rating1}
                onRatingChange={onRatingChange}
              />
            </p>
            <div className="container" > 
            <div className="container" >
              <div className="mb-3 row">
                <div className="col">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Name *"
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email *"
                    aria-label=""
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Your Reviw *"
                  style={{height:'100px'}}
                ></textarea>
              </div>
              <button className="btn-style" >
                Send
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmecy_product_view;
