import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Idonor } from "../../blood-donor/donor-filter/DonorFilter";
import "./DonorEditModal.css";

interface IFormInputs {
    name: string;
    email: string;
    phone: string;
    group: string;
    district: string;
    gender: string;
    img: string;
}

const DonorEditModal = (props: {
    show: boolean;
    handleClose: any;
    donor: Idonor;
    setIsUpdate: any;
}) => {
    const { show, handleClose, donor, setIsUpdate } = props;
    const { register, handleSubmit } = useForm<IFormInputs>();

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        setIsUpdate(false);
        // send data to server and update in database
        const url = `http://localhost:5000/api/v1/donor/${donor._id}`;
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
                    text: "Donor Information Updated Successfully!",
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
                        Edit <span className="text-danger">Blood </span>
                        Donor Information
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
                        "
                        style={{ backgroundColor: "#ffe6e6" }}
                    >
                        <div id="donor-reg-box" className="p-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row g-3 mb-3">
                                    <div className="col-12 col-lg-6">
                                        <TextField
                                            fullWidth
                                            required
                                            label="Name"
                                            defaultValue={donor.name}
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
                                            defaultValue={donor.email}
                                            {...register("email", {
                                                required: true,
                                            })}
                                        />
                                    </div>
                                </div>

                                <div className="row g-3 mb-3">
                                    <div className="col-12 col-lg-6">
                                        <TextField
                                            fullWidth
                                            required
                                            label="Phone"
                                            defaultValue={donor.phone}
                                            {...register("phone", {
                                                required: true,
                                            })}
                                        />
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <FormControl fullWidth required>
                                            <InputLabel id="group">
                                                Blood Group
                                            </InputLabel>
                                            <Select
                                                defaultValue={donor.group}
                                                {...register("group", {
                                                    required: true,
                                                })}
                                                labelId="group"
                                                label="Blood Group"
                                            >
                                                <MenuItem
                                                    value="All"
                                                    className="text-danger"
                                                >
                                                    All Group
                                                </MenuItem>
                                                <MenuItem
                                                    value="A+"
                                                    className="text-danger"
                                                >
                                                    A+
                                                </MenuItem>
                                                <MenuItem
                                                    value="A-"
                                                    className="text-danger"
                                                >
                                                    A-
                                                </MenuItem>
                                                <MenuItem
                                                    value="B+"
                                                    className="text-danger"
                                                >
                                                    B+
                                                </MenuItem>
                                                <MenuItem
                                                    value="B-"
                                                    className="text-danger"
                                                >
                                                    B-
                                                </MenuItem>
                                                <MenuItem
                                                    value="O+"
                                                    className="text-danger"
                                                >
                                                    O+
                                                </MenuItem>
                                                <MenuItem
                                                    value="O-"
                                                    className="text-danger"
                                                >
                                                    O-
                                                </MenuItem>
                                                <MenuItem
                                                    value="AB+"
                                                    className="text-danger"
                                                >
                                                    AB+
                                                </MenuItem>
                                                <MenuItem
                                                    value="AB-"
                                                    className="text-danger"
                                                >
                                                    AB-
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>

                                <div className="row g-3 mb-3">
                                    <div className="col-12 col-lg-6">
                                        <FormControl fullWidth required>
                                            <InputLabel id="district">
                                                District
                                            </InputLabel>
                                            <Select
                                                labelId="district"
                                                label="District"
                                                defaultValue={donor.district}
                                                {...register("district", {
                                                    required: true,
                                                })}
                                            >
                                                <MenuItem value="All">
                                                    All District
                                                </MenuItem>
                                                <MenuItem value="Dhaka">
                                                    Dhaka
                                                </MenuItem>
                                                <MenuItem value="Chittagong">
                                                    Chittagong
                                                </MenuItem>
                                                <MenuItem value="Comilla">
                                                    Comilla
                                                </MenuItem>
                                                <MenuItem value="Rajshahi">
                                                    Rajshahi
                                                </MenuItem>
                                                <MenuItem value="Khulna">
                                                    Khulna
                                                </MenuItem>
                                                <MenuItem value="Jessore">
                                                    Jessore
                                                </MenuItem>
                                                <MenuItem value="Sylhet">
                                                    Sylhet
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <FormControl fullWidth>
                                            <InputLabel id="gender">
                                                Gender
                                            </InputLabel>
                                            <Select
                                                labelId="gender"
                                                label="Gender"
                                                defaultValue={donor.gender}
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
                                <TextField
                                    fullWidth
                                    label="Image URL"
                                    {...register("img")}
                                    defaultValue={donor.img}
                                    placeholder="Put Your Image URL Here..."
                                />
                                <button
                                    className="btn btn-outline-danger fw-bold mt-4"
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

export default DonorEditModal;
