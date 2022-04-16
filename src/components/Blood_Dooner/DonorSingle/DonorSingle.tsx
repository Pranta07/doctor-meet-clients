import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Idonor {
  img: string;
  name: string;
  email: string;
  phone: string;
  group: string;
}

const DonorSingle = (props: { key: number; donor: Idonor }) => {
  const { img, name, email, phone, group } = props.donor;

  return (
    <>
      <div className="col">
        <div className="card h-100 border-danger">
          <img
            src={img}
            className="rounded-circle mt-2 p-3 mx-auto alert-danger"
            alt="..."
            width="200"
            height="200"
          />
          <span className="position-absolute top-0 start-100 translate-middle p-2 alert-danger border border-light rounded-circle text-danger">
            {group}
            <span className="visually-hidden">New alerts</span>
          </span>
          <div className="card-body text-center">
            <p className="text-secondary m-0">Hi, My name is</p>
            <h5 className="card-title">{name}</h5>
            <div className="card-text m-0">
              <p className="my-2">
                <i className="far fa-envelope text-danger"></i>
                <span className="text-danger"> Email: </span>
                {email}
              </p>
              <p className="mb-2">
                <i className="fas fa-phone-alt text-danger"></i>
                <span className="text-danger"> Phone: </span>
                {phone}
              </p>
              <p>
                <i className="far fa-plus-square text-danger"></i>
                <span className="text-danger"> Blood Group: </span>
                {group}
              </p>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-outline-danger w-100">
              <FontAwesomeIcon icon={faPhone} /> Contact
            </button>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-outline-danger w-100">
          <FontAwesomeIcon icon={faPhone} /> Contact
        </button>
      </div>
    </>
  );
};

export default DonorSingle;
