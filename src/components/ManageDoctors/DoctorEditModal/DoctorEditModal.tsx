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
    specialist: string;
    review: number;
    gender: string;
    img: string;
    experience: number;
    visit: number;
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
                                        <label
                                            className={
                                                errors.name
                                                    ? "all-label fw-bold text-danger"
                                                    : "all-label"
                                            }
                                            htmlFor="nameId"
                                        >
                                            Name*
                                        </label>
                                        <input
                                            id="nameId"
                                            className="form-control border-info mb-3"
                                            defaultValue={doctor.name}
                                            {...register("name", {
                                                required: true,
                                            })}
                                        />
                                    </div>

                                    <div className="col-12 col-lg-6 mb-3">
                                        <label
                                            className={
                                                errors.email
                                                    ? "all-label fw-bold text-danger"
                                                    : "all-label"
                                            }
                                            htmlFor="emailId"
                                        >
                                            Email*
                                        </label>
                                        <input
                                            id="emailId"
                                            className="form-control border-info"
                                            defaultValue={doctor.email}
                                            {...register("email", {
                                                required: true,
                                            })}
                                        />
                                    </div>
                                </div>

                                <div className="row gx-2">
                                    <div className="col-12 col-lg-6 mb-3">
                                        <label
                                            className={
                                                errors.phone
                                                    ? "all-label fw-bold text-danger"
                                                    : "all-label"
                                            }
                                            htmlFor="phoneId"
                                        >
                                            Phone*
                                        </label>
                                        <input
                                            id="phoneId"
                                            className="form-control border-info"
                                            {...register("phone", {
                                                required: true,
                                            })}
                                            placeholder="Phone Number"
                                            defaultValue={doctor.phone}
                                        />
                                    </div>

                                    <div className="col-12 col-lg-6 mb-3">
                                        <label
                                            className={
                                                errors.specialist
                                                    ? "all-label fw-bold text-danger"
                                                    : "all-label"
                                            }
                                            htmlFor="deptId"
                                        >
                                            Department*
                                        </label>
                                        <select
                                            id="deptId"
                                            {...register("specialist", {
                                                required: true,
                                            })}
                                            className="form-select border-info"
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
                                    </div>
                                </div>
                                <div className="row gx-2">
                                    <div className="col-12 col-lg-6 mb-3">
                                        <label
                                            className="all-label"
                                            htmlFor="ratId"
                                        >
                                            Rating
                                        </label>
                                        <select
                                            id="ratId"
                                            {...register("review")}
                                            className="form-select border-info"
                                            defaultValue={doctor.review}
                                        >
                                            <option value="">
                                                Select Rating
                                            </option>
                                            <option value={0}>0</option>
                                            <option value={0.5}>0.5</option>
                                            <option value={1}>1</option>
                                            <option value={1.5}>1.5</option>
                                            <option value={2}>2</option>
                                            <option value={2.5}>2.5</option>
                                            <option value={3}>3</option>
                                            <option value={3.5}>3.5</option>
                                            <option value={4}>4</option>
                                            <option value={4.5}>4.5</option>
                                            <option value={5}>5</option>
                                        </select>
                                    </div>

                                    <div className="col-12 col-lg-6 mb-3">
                                        <label
                                            className={
                                                errors.gender
                                                    ? "all-label fw-bold text-danger"
                                                    : "all-label"
                                            }
                                            htmlFor="genId"
                                        >
                                            Gender*
                                        </label>
                                        <select
                                            id="genId"
                                            className="form-select border-info"
                                            {...register("gender", {
                                                required: true,
                                            })}
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
                                <div className="row gx-2">
                                    <div className="col-12 col-lg-6 mb-3">
                                        <label
                                            className={
                                                errors.experience
                                                    ? "all-label fw-bold text-danger"
                                                    : "all-label"
                                            }
                                            htmlFor="expId"
                                        >
                                            Experience*
                                        </label>
                                        <select
                                            id="expId"
                                            {...register("experience", {
                                                required: true,
                                            })}
                                            className="form-select border-info"
                                            defaultValue={doctor.experience}
                                        >
                                            <option value="">
                                                Choose Experience
                                            </option>
                                            <option value={0}>0</option>
                                            <option value={0.5}>0.5</option>
                                            <option value={1}>1</option>
                                            <option value={1.5}>1.5</option>
                                            <option value={2}>2</option>
                                            <option value={2.5}>2.5</option>
                                            <option value={3}>3</option>
                                            <option value={3.5}>3.5</option>
                                            <option value={4}>4</option>
                                            <option value={4.5}>4.5</option>
                                            <option value={5}>5</option>
                                        </select>
                                    </div>

                                    <div className="col-12 col-lg-6 mb-3">
                                        <label
                                            className={
                                                errors.visit
                                                    ? "all-label fw-bold text-danger"
                                                    : "all-label"
                                            }
                                            htmlFor="visId"
                                        >
                                            Visit Count*
                                        </label>
                                        <input
                                            id="visId"
                                            type="number"
                                            className="form-control border-info mb-3"
                                            {...register("visit", {
                                                required: true,
                                            })}
                                            placeholder="Total Visit Count"
                                            defaultValue={doctor.visit}
                                        />
                                    </div>
                                </div>
                                <label
                                    className={
                                        errors.img
                                            ? "all-label fw-bold text-danger"
                                            : "all-label"
                                    }
                                    htmlFor="imgId"
                                >
                                    Image URL*
                                </label>
                                <input
                                    id="imgId"
                                    className="form-control border-info mb-3"
                                    {...register("img", {
                                        required: true,
                                    })}
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
