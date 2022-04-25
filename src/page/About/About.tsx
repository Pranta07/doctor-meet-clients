import React from "react";
import { Link, NavLink } from "react-router-dom";
import aboutImg from "../../Assets/Doctors-pana.svg";
import { Icon } from "@iconify/react";
import "./About.css";

const services = [
    "Virtual Meet",
    "Book Appointment",
    "Chat with Doctors",
    "Covid Portal",
    "Blood Donors",
    "Pharmacy",
    "Premium Membership",
];

const About = () => {
    return (
        <>
            <div
                className="my-5 text-center"
                style={{
                    backgroundColor: "#f5f5f5",
                    padding: "100px",
                    margin: 0,
                }}
            >
                <h1> About Us </h1>
                <span>
                    <NavLink to="/">Home</NavLink>
                </span>
                {" > "} <span> About Us </span>
            </div>

            <div className="container mx-auto text-left">
                <div className="row">
                    <div className="col-12 col-lg-8 mt-5">
                        <div className="bg-white border rounded-3 p-4">
                            <div className="overflow-hidden about-img">
                                <img src={aboutImg} alt="" className="w-100" />
                            </div>
                            <h1
                                className="fs-3 text-left mt-6"
                                style={{ letterSpacing: "1px" }}
                            >
                                WELCOME, WE ARE{" "}
                                <span style={{ color: "rgb(69, 142, 167)" }}>
                                    DOCTOR{" "}
                                </span>
                                <span style={{ color: "#d62246" }}>MEET!</span>
                            </h1>
                            <small>
                                <p className="text-secondary text-left mt-4 mb-6">
                                    We provide to you the best choiches for you.
                                    Adjust it to your health needs and make sure
                                    your undergo treatment with our highly
                                    qualified doctors you can consult with us
                                    which type of service is suitable for your
                                    health.
                                </p>
                            </small>
                            <Link to="/ContactUs">
                                <button className="btn btn-outline-info mt-2">
                                    Contact Now
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* services */}
                    <div className="col-12 col-lg-4 mt-5 px-4">
                        <h1
                            className="fs-3 border-bottom border-2 pb-3 mb-3 rounded"
                            style={{ letterSpacing: "1px" }}
                        >
                            SERVICES
                        </h1>
                        {services.map((category, index) => (
                            <p
                                className="service-item mb-4 fw-medium"
                                key={index}
                            >
                                {category.toUpperCase()}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-style-for-contact">
                <div className="container">
                    <div className="row p-5 my-auto d-flex align-items-center">
                        <div className="col-lg-3 text-light">
                            <div className="d-flex align-items-center">
                                <div className="contact-us-btn mx-3">
                                    <span className="text-center">
                                        {" "}
                                        <Icon icon="cil:hospital" />{" "}
                                    </span>
                                </div>
                                <div>
                                    <h6 className="fw-bold"> ADDRESS </h6>
                                    <small>
                                        <p className="m-0">
                                            House No#1, 8 Satmasjid Road, Dhaka
                                            1207
                                        </p>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="d-flex text-light align-items-center">
                                <div className="contact-us-btn mx-3">
                                    <span className="text-center">
                                        {" "}
                                        <Icon icon="fluent:call-add-24-regular" />
                                    </span>
                                </div>
                                <div>
                                    <h6 className="fw-bold"> CALL US </h6>
                                    <small>
                                        <p className="m-0">
                                            +8809003439 <br />
                                            +8809003440
                                        </p>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="d-flex text-light align-items-center">
                                <div className="contact-us-btn-write mx-3">
                                    <span className="text-center">
                                        {" "}
                                        <Icon icon="fontisto:prescription" />
                                    </span>
                                </div>
                                <div>
                                    <h6 className="fw-bold"> WRITE TO US </h6>
                                    <small>
                                        <p className="m-0">
                                            office@medicare.com
                                            book@medicare.com
                                        </p>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="d-flex text-light align-items-center">
                                <div className="contact-us-btn mx-3">
                                    <span className="text-center">
                                        {" "}
                                        <Icon icon="iconoir:healthcare" />
                                    </span>
                                </div>
                                <div>
                                    <h6 className="fw-bold">
                                        {" "}
                                        BOOK AN APPOINTMENT{" "}
                                    </h6>
                                    <small>
                                        <p className="m-0">
                                            Click here to book an appointment at
                                            Medicare.
                                        </p>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
