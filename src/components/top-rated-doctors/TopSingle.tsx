import React from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@mui/material";
import "../single-doctor/SingleDoctor.css";

const TopSingle = (props: any) => {
    const { img, name, specialist, review } = props.top;

    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="border overflow-hidden shadow-sm rounded-3 h-100">
                <div className="overflow-hidden">
                    <img
                        src={img}
                        className="doctorImg w-100 rounded-start"
                        alt="..."
                        height="280"
                    />
                </div>
                <div className="p-4">
                    <h4 className="d-name m-0">{name}</h4>
                    <h5 className="d-spec pb-1">{specialist}</h5>
                    <p className="m-0">
                        <FontAwesomeIcon
                            className="icon"
                            icon={faLocationDot}
                        ></FontAwesomeIcon>
                        <span className="text-secondary">Bangladesh</span>
                    </p>
                    {/* <Rating
                        name="read-only"
                        value={review}
                        readOnly
                        size="small"
                        precision={0.5}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default TopSingle;
