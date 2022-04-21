import { RatingStar } from "rating-star";
import React, { useEffect, useState } from "react";
import { Cart, Heart, Search } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";


let getData = () => {
  let data = localStorage.getItem("item");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Pharmecy_shop = (props: any) => {
  let [itemData, setItemData] = useState(getData());

  let { name, price, rating, img1, img2, _id } = props.product;

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

    const newItems = [...items, props.products];
    // console.log(newItems);

    localStorage.setItem("item", JSON.stringify([...newItems]));
  };

  return (

    <div className="col-lg-4">
      <div className="product mt-3 p-4">
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
            <button onClick={()=>addDoctor(_id)} className="btn" title="Add to Cart">
              {" "}
              <Cart></Cart>{" "}
            </button>
            <button className="btn" title="Quick View">
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
      </div>
    </div>
  );
};

export default Pharmecy_shop;
