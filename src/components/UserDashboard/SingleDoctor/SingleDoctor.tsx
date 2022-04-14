import React from "react";
import {
    faCalendar,
    faCertificate,
    faHeart,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "react-simple-star-rating";
import "./SingleDoctor.css";

const SingleDoctor = (props: any) => {
    const { name, specialist, img, review } = props.doctor;

    return (
        <div
            className="mx-auto border overflow-hidden shadow-sm rounded-3 mb-5"
            style={{ maxWidth: "740px" }}
        >
            <div className="row">
                <div className="col-3 border-end overflow-hidden pe-0">
                    {/* https://metropolitanhost.com/themes/themeforest/react/docfind/assets/img/doctors-grid/348x350-0.jpg */}
                    <img
                        src={img}
                        className="doctorImg w-100 rounded-start h-100"
                        alt="..."
                    />
                </div>
                <div className="col-5 border-end p-4">
                    <h4 className="d-name">{name}</h4>
                    <h5 className="d-spec">{specialist}</h5>
                    <p className="d-add">
                        University of California San Francisco Parnassus Campus
                    </p>
                    <div className="d-flex">
                        <button className="btn-grad">VIEW MORE</button>
                        <button className="btn-grad">
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
                <div className="col-4 info p-4">
                    <p>
                        <FontAwesomeIcon
                            className="icon"
                            icon={faLocationDot}
                        ></FontAwesomeIcon>
                        Hong Kong
                    </p>
                    <p>
                        <FontAwesomeIcon
                            className="icon"
                            icon={faCertificate}
                        ></FontAwesomeIcon>
                        5 Yrs Experience
                    </p>
                    <p>
                        <FontAwesomeIcon
                            className="icon"
                            icon={faCalendar}
                        ></FontAwesomeIcon>
                        Tue, Wed, Thu, Fri,
                    </p>
                    <Rating size={20} ratingValue={review * 20} readonly />
                </div>
            </div>
        </div>
    );
};

export default SingleDoctor;
