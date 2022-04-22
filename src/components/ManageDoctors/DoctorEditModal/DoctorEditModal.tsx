import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import "./DoctorEditModal.css";
import { Idoctor } from "../../UserDashboard/FavoriteDoctors/FavoriteDoctors";

interface IFormInputs {
    name: string;
    email: string;
    phone: string;
    group: string;
    district: string;
    gender: string;
    img: string;
}

const DoctorEditModal = (props: {
    show: boolean;
    handleClose: any;
    doctor: Idoctor;
    setIsUpdate: any;
}) => {
    const { show, handleClose, doctor, setIsUpdate } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>();

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        setIsUpdate(false);
        // send data to server and update in database
        const url = `http://localhost:5000/doctors/${doctor._id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            if (res.status === 200) {
                setIsUpdate(true);
                handleClose();
                Swal.fire({
                    title: "Well done!",
                    text: "Doctor Information Updated Successfully!",
                    icon: "success",
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    title: "Warning!",
                    text: "Already up to date!",
                    icon: "warning",
                    timer: 2000,
                });
            }
        });
    };

    return (
        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h4 className="text-center fw-bold">
                        Edit <span className="text-info">Doctor </span>
                        Information
                    </h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div
                        className="
                            reg-div
                            col-10 col-md-10
                            mx-auto
                            rounded
                            my-5
                            alert-info
                        "
                    >
                        <div id="doctor-reg-box" className="p-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row gx-2">
                                    <div className="col-12 col-lg-6">
                                        <input
                                            className="form-control border-danger mb-3"
                                            defaultValue={doctor.name}
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

                                    <div className="col-12 col-lg-6 mb-3">
                                        <input
                                            className="form-control border-danger"
                                            defaultValue={doctor.email}
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
                                    <div className="col-12 col-lg-6 mb-3">
                                        <input
                                            className="form-control border-danger"
                                            {...register("phone", {
                                                required: true,
                                            })}
                                            placeholder="Phone Number"
                                            defaultValue={doctor.phone}
                                        />
                                        {errors.phone && (
                                            <span className="fw-bold">
                                                *Required
                                            </span>
                                        )}
                                    </div>

                                    <div className="col-12 col-lg-6 mb-3">
                                        <select
                                            {...register("group", {
                                                required: true,
                                            })}
                                            className="form-select border-danger"
                                            defaultValue={doctor.specialist}
                                        >
                                            <option value="">
                                                Select Department
                                            </option>
                                            <option value="Orthopedics">
                                                Orthopedics
                                            </option>
                                            <option value="Dermatologist">
                                                Dermatologist
                                            </option>
                                            <option value="Medicine">
                                                Medicine
                                            </option>
                                            <option value="Gayeny">
                                                Gayeny
                                            </option>
                                            <option value="Eye">Eye</option>
                                            <option value="Surgery">
                                                Surgery
                                            </option>
                                            <option value="Nose, Ear and Throat">
                                                Nose, Ear and Throat
                                            </option>
                                            <option value="Others">
                                                Others
                                            </option>
                                        </select>
                                        {errors.group && (
                                            <span className="fw-bold">
                                                *Required
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="row gx-2">
                                    <div className="col-12 col-lg-6 mb-3">
                                        <select
                                            {...register("district", {
                                                required: true,
                                            })}
                                            className="form-select border-danger"
                                            defaultValue={doctor.review}
                                        >
                                            <option value="">
                                                Select Rating
                                            </option>
                                            <option value="0">0</option>
                                            <option value="0.5">0.5</option>
                                            <option value="1">1</option>
                                            <option value="1.5">1.5</option>
                                            <option value="2">2</option>
                                            <option value="2.5">2.5</option>
                                            <option value="3">3</option>
                                            <option value="3.5">3.5</option>
                                            <option value="4">4</option>
                                            <option value="4.5">4.5</option>
                                            <option value="5">5</option>
                                        </select>
                                        {errors.district && (
                                            <span className="fw-bold">
                                                *Required
                                            </span>
                                        )}
                                    </div>

                                    <div className="col-12 col-lg-6 mb-3">
                                        <select
                                            className="form-select border-danger"
                                            {...register("gender")}
                                            defaultValue={doctor.gender}
                                        >
                                            <option value="">
                                                Select Gender
                                            </option>
                                            <option value="Male">Male</option>
                                            <option value="Female">
                                                Female
                                            </option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <input
                                    className="form-control border-danger mb-3"
                                    {...register("img")}
                                    placeholder="Put Your Image URL Here..."
                                    defaultValue={doctor.img}
                                />
                                <button
                                    className="btn btn-outline-info fw-bold"
                                    type="submit"
                                >
                                    Save Changes{" "}
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
    );
};

export default DoctorEditModal;
