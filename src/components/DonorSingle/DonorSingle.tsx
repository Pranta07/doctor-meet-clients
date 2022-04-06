import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const DonorSingle = () => {
    return (
        <div className="col">
            <div className="card h-100 border-danger">
                <img
                    src="https://randomuser.me/api/portraits/men/57.jpg"
                    className="rounded-circle mt-2 p-3 mx-auto alert-danger"
                    alt="..."
                    width="200"
                    height="200"
                />
                <div className="card-body text-center">
                    <p className="text-secondary m-0">Hi, My name is</p>
                    <h5 className="card-title">Random Donor</h5>
                    <p className="card-text m-0">
                        <i className="far fa-envelope text-danger"></i>
                        <span className="text-danger">
                            Email:
                            <br />{" "}
                        </span>
                        random@gmail.com
                        <br />
                        <i className="fas fa-phone-alt text-danger"></i>
                        <span className="text-danger">
                            Phone: <br />
                        </span>
                        093633......
                        <br />
                        <i className="far fa-plus-square text-danger"></i>
                        <span className="text-danger">
                            Blood Group: <br />
                        </span>
                        B+
                    </p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-danger w-100">
                        <FontAwesomeIcon icon={faPhone} /> Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DonorSingle;
