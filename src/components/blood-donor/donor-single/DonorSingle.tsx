import React from "react";
import { faEarthAsia, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@mui/material";
import Badge from "@mui/material/Badge";
import { Idonor } from "../donor-filter/DonorFilter";

const DonorSingle = (props: { key: string; donor: Idonor }) => {
    const { img, name, email, phone, group, district } = props.donor;

    return (
        <div className="col">
            <div className="card h-100">
                {img.length > 0 ? (
                    <Badge badgeContent={group} color="primary">
                        <img
                            src={img}
                            className="rounded-circle m-3 p-3 mx-auto alert-danger"
                            alt="..."
                            width="180"
                            height="180"
                        />
                    </Badge>
                ) : (
                    <Badge badgeContent={group} color="primary">
                        <Avatar
                            className="mx-auto"
                            alt="donor-img"
                            sx={{
                                width: 180,
                                height: 180,
                                p: 3,
                                m: 2,
                                backgroundColor: "#fce3e3",
                            }}
                        />
                    </Badge>
                )}
                {/* <span className="position-absolute top-0 start-100 translate-middle p-2 alert-danger border border-light rounded-circle text-danger">
                        {group}
                        <span className="visually-hidden">New alerts</span>
                    </span> */}
                <div className="card-body text-center">
                    <p className="text-secondary m-0">Hi, My name is</p>
                    <h5 className="card-title">{name}</h5>
                    <div className="card-text">
                        <p className="my-1">
                            <i className="far fa-envelope text-danger"></i>
                            <span className="text-danger"> Email: </span>
                            {email}
                        </p>
                        <p className="my-1">
                            <i className="fas fa-phone-alt text-danger"></i>
                            <span className="text-danger"> Phone: </span>
                            {phone}
                        </p>
                        <p className="my-1">
                            <i className="far fa-plus-square text-danger"></i>
                            <span className="text-danger"> Blood Group: </span>
                            {group}
                        </p>
                        <p>
                            <FontAwesomeIcon
                                icon={faEarthAsia}
                                className="text-danger"
                            />
                            <span className="text-danger"> District: </span>
                            {district}
                        </p>
                    </div>
                </div>
                <div className="card-footer">
                    <a href={`tel:${phone}`}>
                        <button className="btn btn-outline-danger w-100">
                            <FontAwesomeIcon icon={faPhone} /> Contact
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DonorSingle;
