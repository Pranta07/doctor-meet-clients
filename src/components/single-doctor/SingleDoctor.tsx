import React, { useEffect, useState } from "react";
import {
  faCalendar,
  faCertificate,
  faHeart,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Swal from "sweetalert2";
import "./SingleDoctor.css";
import { Idoctor } from "../favorite-doctors/FavoriteDoctors";
import { Rating } from "@mui/material";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  backgroundColor: theme.palette.background.default,
}));

interface Iprops {
  key: string;
  doctor: Idoctor;
  remove: boolean;
  setRemove: (value: boolean) => void;
}

const SingleDoctor = (props: Iprops) => {
  const { _id, name, specialist, img, review, experience, appointmentDay } =
    props.doctor;
  const { remove, setRemove } = props;
  const [favorite, setFavorite] = useState(true);

  useEffect(() => {
    const favoriteList = localStorage.getItem("fav-doc");

    if (favoriteList) {
      const listItems: any[] = JSON.parse(favoriteList);
      const authorId = listItems.find((author) => author._id === _id);

      if (authorId) setFavorite(false);
      else setFavorite(true);
    }
  }, [_id]);

  const addFavorite = (id: string) => {
    Swal.fire(
      "Great!",
      `${name} has been added to your Favorite list!`,
      "success"
    );
    setFavorite(false);

    //save the doctor to local storage
    const favorite = localStorage.getItem("fav-doc");

    let items;
    if (favorite) items = JSON.parse(favorite);
    else items = [];

    const newItems = [...items, props.doctor];
    // console.log(newItems);

    localStorage.setItem("fav-doc", JSON.stringify([...newItems]));
  };

  const removeFavorite = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${name} will be removed from your Favorite list!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Great!", "Removed Successfully!", "success");
        setFavorite(true);
        setRemove(!remove);

        //remove the doctor from local storage
        const favorite = localStorage.getItem("fav-doc");

        let items: any[];
        if (favorite) items = JSON.parse(favorite);
        else items = [];

        const newItems = items.filter((author) => author._id !== id);
        // console.log(newItems);

        localStorage.setItem("fav-doc", JSON.stringify([...newItems]));
      }
    });
  };

  return (
    <RootStyle
      className="mx-auto border overflow-hidden shadow-sm rounded-3 m-5"
      style={{ maxWidth: "740px" }}
    >
      <div className="row">
        <div className="col-12 col-lg-3 border-end overflow-hidden pe-0">
          <img
            src={img}
            className="doctorImg w-100 rounded-start h-100"
            alt="..."
          />
        </div>
        <div className="col-7 col-lg-5 border-end p-4">
          <h4 className="d-name">{name}</h4>
          <h5 className="d-spec">{specialist}</h5>
          <p className="d-add">
            University of California San Francisco Parnassus Campus
          </p>
          <div className="d-flex">
            <NavLink style={{ textDecoration: "none" }} to={`/doctor/${_id}`}>
              <button className="btn-grad1">VIEW MORE</button>
            </NavLink>
            {favorite ? (
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    Add to <strong>Favorite</strong>.
                  </Tooltip>
                }
              >
                <button
                  onClick={() => addFavorite(_id)}
                  className="btn-grad2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Tooltip on top"
                >
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </button>
              </OverlayTrigger>
            ) : (
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    Remove from <strong>Favorite</strong>.
                  </Tooltip>
                }
              >
                <button
                  onClick={() => removeFavorite(_id)}
                  className="btn-grad1"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Tooltip on top"
                >
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                </button>
              </OverlayTrigger>
            )}
          </div>
        </div>
        <div className="col-5 col-md-4 info p-4">
          <p>
            <FontAwesomeIcon
              className="icon"
              icon={faLocationDot}
            ></FontAwesomeIcon>
            Bangladesh
          </p>
          <p>
            <FontAwesomeIcon
              className="icon"
              icon={faCertificate}
            ></FontAwesomeIcon>
            {experience} Years Experience
          </p>
          <p>
            <FontAwesomeIcon
              className="icon"
              icon={faCalendar}
            ></FontAwesomeIcon>
            {/* Tue, Wed, Thu, Fri, */}
            {appointmentDay}
          </p>
          <Rating
            name="read-only"
            value={review}
            readOnly
            size="small"
            precision={0.5}
          />
        </div>
      </div>
    </RootStyle>
  );
};

export default SingleDoctor;
