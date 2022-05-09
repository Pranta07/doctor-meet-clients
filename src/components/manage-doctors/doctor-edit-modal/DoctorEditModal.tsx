import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import "./DoctorEditModal.css";
import { Idoctor } from "../../favourite-doctors/FavoriteDoctors";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";

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
    const { register, handleSubmit } = useForm<IFormInputs>();

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        setIsUpdate(false);
        // send data to server and update in database
        const url = `http://localhost:5000/api/v1/doctors/${doctor._id}`;
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
                                <div className="row gx-3 gy-4 mb-4">
                                    <div className="col-12 col-lg-6">
                                        <TextField
                                            fullWidth
                                            required
                                            label="Name"
                                            defaultValue={doctor.name}
                                            {...register("name", {
                                                required: true,
                                            })}
                                        />
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <TextField
                                            fullWidth
                                            required
                                            label="Email"
                                            defaultValue={doctor.email}
                                            {...register("email", {
                                                required: true,
                                            })}
                                        />
                                    </div>
                                </div>

                                <div className="row gx-3 gy-4 mb-4">
                                    <div className="col-12 col-lg-6">
                                        <TextField
                                            fullWidth
                                            required
                                            label="Phone"
                                            defaultValue={doctor.phone}
                                            {...register("phone", {
                                                required: true,
                                            })}
                                        />
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <FormControl fullWidth required>
                                            <InputLabel id="dept">
                                                Department
                                            </InputLabel>
                                            <Select
                                                labelId="dept"
                                                label="Department"
                                                {...register("specialist", {
                                                    required: true,
                                                })}
                                                defaultValue={doctor.specialist}
                                            >
                                                <MenuItem value="Orthopedics">
                                                    Orthopedics
                                                </MenuItem>
                                                <MenuItem value="Dermatologist">
                                                    Dermatologist
                                                </MenuItem>
                                                <MenuItem value="Medicine">
                                                    Medicine
                                                </MenuItem>
                                                <MenuItem value="Gayeny">
                                                    Gayeny
                                                </MenuItem>
                                                <MenuItem value="Eye">
                                                    Eye
                                                </MenuItem>
                                                <MenuItem value="Surgery">
                                                    Surgery
                                                </MenuItem>
                                                <MenuItem value="Nose, Ear and Throat">
                                                    Nose, Ear and Throat
                                                </MenuItem>
                                                <MenuItem value="Others">
                                                    Others
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="row gx-3 gy-4 mb-4">
                                    <div className="col-12 col-lg-6 mb-2">
                                        <FormControl fullWidth>
                                            <InputLabel id="rating">
                                                Rating
                                            </InputLabel>
                                            <Select
                                                labelId="rating"
                                                label="Rating"
                                                {...register("review")}
                                                defaultValue={doctor.review}
                                            >
                                                <MenuItem value={0}>0</MenuItem>
                                                <MenuItem value={0.5}>
                                                    0.5
                                                </MenuItem>
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={1.5}>
                                                    1.5
                                                </MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={2.5}>
                                                    2.5
                                                </MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={3.5}>
                                                    3.5
                                                </MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={4.5}>
                                                    4.5
                                                </MenuItem>
                                                <MenuItem value={5}>5</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <FormControl fullWidth required>
                                            <InputLabel id="gender">
                                                Gender
                                            </InputLabel>
                                            <Select
                                                labelId="gender"
                                                label="Gender"
                                                defaultValue={doctor.gender}
                                                {...register("gender")}
                                            >
                                                <MenuItem value="Male">
                                                    Male
                                                </MenuItem>
                                                <MenuItem value="Female">
                                                    Female
                                                </MenuItem>
                                                <MenuItem value="Other">
                                                    Other
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="row gx-3 gy-4 mb-4">
                                    <div className="col-12 col-lg-6">
                                        <FormControl fullWidth required>
                                            <InputLabel id="exp">
                                                Experience
                                            </InputLabel>
                                            <Select
                                                labelId="exp"
                                                label="Experience"
                                                {...register("experience", {
                                                    required: true,
                                                })}
                                                defaultValue={doctor.experience}
                                            >
                                                <MenuItem value={0}>0</MenuItem>
                                                <MenuItem value={0.5}>
                                                    0.5
                                                </MenuItem>
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={1.5}>
                                                    1.5
                                                </MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={2.5}>
                                                    2.5
                                                </MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={3.5}>
                                                    3.5
                                                </MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={4.5}>
                                                    4.5
                                                </MenuItem>
                                                <MenuItem value={5}>5</MenuItem>{" "}
                                            </Select>
                                        </FormControl>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <TextField
                                            fullWidth
                                            required
                                            label="Visit Count"
                                            {...register("visit", {
                                                required: true,
                                            })}
                                            placeholder="Total Visit Count"
                                            defaultValue={doctor.visit}
                                        />
                                    </div>
                                </div>
                                <TextField
                                    fullWidth
                                    required
                                    label="Image URL"
                                    {...register("img", {
                                        required: true,
                                    })}
                                    defaultValue={doctor.img}
                                    placeholder="Put Your Image URL Here..."
                                />
                                <button
                                    className="btn btn-outline-info fw-bold mt-4"
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
