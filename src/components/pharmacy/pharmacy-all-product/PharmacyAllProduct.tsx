/* eslint-disable react/jsx-no-undef */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "./PharmacyAllProduct.css";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import PharmacyPriceSlide from "../pharmacy-price-slide/PharmacyPriceSlide";
import { productsType } from "../pharmacy-products/PharmacyProducts";
import PharmacyShop from "../pharmacy-shop/PharmacyShop";
import "./PharmacyAllProduct.css";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { getProduct } from "../../../redux/actions/productAction";

const PharmacyAllProduct = () => {
  let [upperPrice, setUpperPrice] = useState(0);
  let [lowerPrice, setLowerPrice] = useState(0);
  let price = [lowerPrice, upperPrice]
  let keyword = '';
  let currentPage = 1;
  let category = "";


  const dispatch = useAppDispatch();
  const { products, productsCount }: any = useAppSelector((state) => state.products);
  console.log(products);
  // let [count, setCount] = useState(1);
  // if (products.length) {
  //   setCount(Math.ceil(productsCount / products?.length));

  // }
  let count = Math.ceil(productsCount / products?.length);


  const [page, setPage] = useState(1);

  // let inputRef = useRef("");
  let [searchValue, setSearchValue] = useState('');


  //@ts-ignore
  const handleOnChange = (e) => {
    setSearchValue(e.target.value);

  }

  //@ts-ignore
  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log("clicked");
    //@ts-ignore
    let filteredProducts = products?.filter((product): any => product.name.toLowerCase() === searchValue.toLowerCase());
    console.log(filteredProducts)
  }

  useEffect(() => {
    //@ts-ignore
    dispatch(getProduct())

  }, []);

  return (
    <>
      <div
        className="my-5 text-center "
        style={{ backgroundColor: "#f5f5f5", padding: "100px", margin: 0 }}
      >
        <h1> Shop </h1>
        <span>
          {" "}
          <NavLink to="/">Home</NavLink>{" "}
        </span>{" "}
        <span> {">"} </span> <span> Products </span>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 col-sm-12">
            <div>
              <div className="d-flex my-4">
                <input
                  className="form-control w-75"
                  type="text"
                  placeholder="Search...."
                  // ref={inputRef}
                  // setSearchValue={(e: any) => e.target.value}
                  onChange={(e) => handleOnChange(e)}
                />{" "}
                {
                  products.length > 0 &&
                  <button
                    onClick={(e) => handleSearch(e)}
                    className="btn btn-outline-primary mx-2">
                    {" "}
                    <FontAwesomeIcon
                      icon={faSearch}
                    />{" "}
                  </button>
                }
              </div>
              <h3> Product categories </h3>
              <hr className="hr-blue" />
              <div className="my-3 mb-5">
                <h5> Cream</h5>
                <h5> Pills</h5>
                <h5> Herbs</h5>
                <h5> Capsules</h5>
                <h5> Drops</h5>
              </div>
              <h3> Filter by price </h3>
              <hr className="hr-blue" />
              <div className="my-3">
                <PharmacyPriceSlide
                  label="Price Range"
                  formatOptions={{ style: "currency", currency: "USD" }}
                  maxValue={100}
                  minValue={0}
                  defaultValue={[0, 100]}
                  step={2}
                  setUpperPrice={setUpperPrice}
                  setLowerPrice={setLowerPrice}
                />
                <div className="my-1">
                  <button className="btn-primary btn"
                    onClick={
                      //@ts-ignore
                      () => dispatch(getProduct(keyword, currentPage, price))}
                  > Filter </button>{" "}
                </div>
              </div>
              <div className="my-4">
                <h3> Product tags </h3>
                <hr className="hr-blue" />
                <div className="my-3 row">
                  <button className="btn col-lg-3"> Cytotoxic </button>
                  <button className="btn col-lg-4"> Cold Cures </button>
                  <button className="btn col-lg-4"> Expectorant </button>
                  <button className="btn col-lg-3"> Laxatives </button>
                  <button className="btn col-lg-3"> Sedatives </button>
                  <button className="btn col-lg-3"> Vitamins </button>
                  <button className="btn col-lg-3"> Pills </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-sm-12">
            <div className="row my-4">
              <div className="col-lg-10">
                <p> Showing 1–12 of 17 results </p>
              </div>
              <div className="col-lg-2">
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <Button
                        variant="text"
                        className="txt-dark"
                        {...bindTrigger(popupState)}
                      >
                        Default sorting
                      </Button>
                      <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>
                          Sort by popularity
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                          Sort by average rating
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                          Sort by latest
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                          Sort by price: low to high
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                          Sort by price: high to low
                        </MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              </div>
            </div>
            <div className="row">

              {
                //@ts-ignore
                products.map((product) => (
                  <PharmacyShop
                    products={product}
                    Key={product._id}
                  ></PharmacyShop>
                ))}
            </div>
            <Stack spacing={2}>
              <Pagination
                count={count}
                color="primary"
                renderItem={(item: any) => (
                  <PaginationItem
                    components={{
                      previous: ArrowBackIcon,
                      next: ArrowForwardIcon,
                    }}
                    {...item}
                  />
                )}
              />
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default PharmacyAllProduct;
