import React, { useState } from "react";
import {
    faArrowRight,
    faEarthAsia,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Modal, Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import "react-phone-number-input/style.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

interface IFormInputs {
    name: string;
    email: string;
    phone: string;
    group: string;
    district: string;
    gender: string;
    img: string;
}

const JoinUsForm = (props: any) => {
    const { show, handleClose } = props;
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>();

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        // console.log(data);
        // send data to server and store in database
        fetch("http://localhost:5000/donor/add", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            // console.log(res.status);
            if (res.status === 200) {
                handleClose();
                Swal.fire(
                    "Congratulations!",
                    "Welcome to Blood Donors Community!",
                    "success"
                );
            }
        });
    };

    return (
        <div>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4 className="text-center fw-bold">
                            Join us in{" "}
                            <span className="text-danger">Blood </span> Donors
                            Community
                        </h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div
                            className="
                            reg-div
                            col-10 col-md-8 col-lg-10
                            mx-auto
                            rounded
                            my-5
                            alert-danger
                        "
                        >
                            <div id="donor-reg-box" className="p-5">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row gx-2">
                                        <div className="col-6">
                                            <input
                                                className="form-control border-danger mb-3"
                                                defaultValue={
                                                    user?.displayName || ""
                                                }
                                                {...register("name", {
                                                    required: true,
                                                })}
                                            />
                                            {errors.name && (
                                                <span className="fw-bold">
                                                    *Required
                                                </span>
                                            )}
                                        </div>

                                        <div className="col-6 mb-3">
                                            <input
                                                className="form-control border-danger"
                                                defaultValue={user?.email || ""}
                                                {...register("email", {
                                                    required: true,
                                                })}
                                            />
                                            {errors.email && (
                                                <span className="fw-bold">
                                                    *Required
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="row gx-2">
                                        <div className="col-6 mb-3">
                                            <input
                                                className="form-control border-danger"
                                                {...register("phone", {
                                                    required: true,
                                                })}
                                                placeholder="Phone Number"
                                            />
                                            {errors.phone && (
                                                <span className="fw-bold">
                                                    *Required
                                                </span>
                                            )}
                                        </div>
                                        <div className="col-6 mb-3">
                                            <select
                                                {...register("group", {
                                                    required: true,
                                                })}
                                                className="form-select border-danger"
                                            >
                                                <option value="">
                                                    Select Blood Group
                                                </option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                            </select>
                                            {errors.group && (
                                                <span className="fw-bold">
                                                    *Required
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row gx-2">
                                        <div className="col-6 mb-3">
                                            <select
                                                {...register("district", {
                                                    required: true,
                                                })}
                                                className="form-select border-danger"
                                            >
                                                <option value="">
                                                    Select District
                                                </option>
                                                <option value="Dhaka">
                                                    Dhaka
                                                </option>
                                                <option value="Chittagong">
                                                    Chittagong
                                                </option>
                                                <option value="Comilla">
                                                    Comilla
                                                </option>
                                                <option value="Rajshahi">
                                                    Rajshahi
                                                </option>
                                                <option value="Khulna">
                                                    Khulna
                                                </option>
                                                <option value="Jessore">
                                                    Jessore
                                                </option>
                                                <option value="Sylhet">
                                                    Sylhet
                                                </option>
                                            </select>
                                            {errors.district && (
                                                <span className="fw-bold">
                                                    *Required
                                                </span>
                                            )}
                                        </div>
                                        <div className="col-6 mb-3">
                                            <select
                                                className="form-select border-danger"
                                                {...register("gender")}
                                            >
                                                <option value="">
                                                    Select Gender
                                                </option>
                                                <option value="Male">
                                                    Male
                                                </option>
                                                <option value="Female">
                                                    Female
                                                </option>
                                                <option value="Other">
                                                    Other
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <input
                                        className="form-control border-danger mb-3"
                                        {...register("img")}
                                        placeholder="Put Your Image URL Here..."
                                    />
                                    <button
                                        className="btn btn-outline-danger fw-bold"
                                        type="submit"
                                    >
                                        Join Us{" "}
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default JoinUsForm;
