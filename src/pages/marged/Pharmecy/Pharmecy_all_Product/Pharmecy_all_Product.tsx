/* eslint-disable react/jsx-no-undef */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./Pharmecy_all_Product.css";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import RangeSlider from "../Pharmecy_price_slider/Pharmecy_price_slide";
import { productsType } from "../PharmecyProducts/Pharmecy_Products";
import Pharmecy_shop from "../Pharmecy_shop/Pharmecy_shop";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Pharmecy_all_Product = () => {
  let [products, setProducts] = useState<productsType[]>([]);

  useEffect(() => {
    fetch("https://immense-beyond-64415.herokuapp.com/medicine/all")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.result);
      });
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
                />{" "}
                <button className="btn btn-outline-primary mx-2">
                  {" "}
                  <FontAwesomeIcon icon={faSearch} />{" "}
                </button>
              </div>
              <h3> Product categories </h3>
              <hr className="hr-blue" />
              <div className="my-3 mb-5">
                <h5> Cream</h5>
                <h5> Pills</h5>
                <h5> Herbs</h5>
                <h5> Capsules</h5>
                <h5> Dorps</h5>
              </div>
              <h3> Filter by price </h3>
              <hr className="hr-blue" />
              <div className="my-3">
                <RangeSlider
                  label="Price Range"
                  formatOptions={{ style: "currency", currency: "USD" }}
                  maxValue={1200}
                  defaultValue={[0, 1200]}
                  step={10}
                />
                <div className="my-1">
                  <button className="btn-primary btn"> Filtar </button>{" "}
                </div>
              </div>
              <div className="my-4">
                <h3> Product tags </h3>
                <hr className="hr-blue" />
                <div className="my-3 row">
                  <button className="btn col-lg-3"> Cytotoxics </button>
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
              {products.map((product) => (
                <Pharmecy_shop
                  products={product}
                  Key={product._id}
                ></Pharmecy_shop>
              ))}
            </div>
            <Stack spacing={2}>
              <Pagination
                count={10}
                renderItem={(item) => (
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

export default Pharmecy_all_Product;
