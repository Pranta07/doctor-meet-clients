import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vector1 from "../../../Assets/blood donation/vector1.jpg";
import DonorChart from "../DonorChart/DonorChart";

const DonorHeader = () => {
  return (
    <>
      <section className="container">
        <div
          className="
                row
                justify-content-center
                align-items-center
                blood-donate
            "
                >
                    <div className="section-intro col-10 col-md-6 col-lg-6">
                        <h1 className="fw-bold">
                            Donate <span className="text-danger">Blood</span> &
                            Save Life
                        </h1>
                        <p className="text-secondary">
                            <small>
                                Roll up your sleeves and contribute proactively
                                in this noble cause. A drop of blood can save a
                                life! Donate blood and get real blessings. Your
                                droplets of blood may create an ocean of
                                happiness.
                            </small>
                        </p>
                        <button className="button btn btn-outline-danger fw-bold mb-2 rounded-pill">
                            Join Us <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                    <div className="col-10 col-md-6 col-lg-6">
                        <img src={vector1} alt="" className="w-100" />
                    </div>
                </div>
            </section>
            <DonorChart></DonorChart>
        </>
    );
};

export default DonorHeader;
