import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Button,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useAppSelector } from "../../redux/store";

interface IFormInputs {
    name: string;
    email: string;
    phone: string;
    specialist: string;
    gender: string;
    img: string;
    experience: number;
}

const AddDoctor = () => {
    const { user }: any = useAppSelector((state) => state.user);
    const { register, handleSubmit } = useForm<IFormInputs>();

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        // send data to server
        const url = `http://localhost:5000/api/v1/doctors/add`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            if (res.status === 200) {
                Swal.fire({
                    title: "Well done!",
                    text: "Your Information Saved Successfully!",
                    icon: "success",
                    timer: 1500,
                });
                window.location.reload();
            } else {
                Swal.fire({
                    title: "Warning!",
                    text: "Some error occured!",
                    icon: "warning",
                    timer: 2000,
                });
            }
        });
    };

    return (
        <Box>
            <h4 className="text-center fw-bold">
                Provide Your <span className="text-info">Information</span>
            </h4>
            <div className="row">
                <div
                    className="
                            reg-div
                            col-10 col-md-10
                            mx-auto
                            rounded
                            my-3
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
                                        {...register("name", {
                                            required: true,
                                        })}
                                        defaultValue={user?.name || ""}
                                        disabled
                                    />
                                </div>

                                <div className="col-12 col-lg-6">
                                    <TextField
                                        fullWidth
                                        required
                                        label="Email"
                                        {...register("email", {
                                            required: true,
                                        })}
                                        defaultValue={user?.email || ""}
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="row gx-3 gy-4 mb-4">
                                <div className="col-12 col-lg-6">
                                    <TextField
                                        fullWidth
                                        required
                                        label="Phone"
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
                                            <MenuItem value="Gynaecology">
                                                Gynaecology
                                            </MenuItem>
                                            <MenuItem value="Eye">Eye</MenuItem>
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
                                <div className="col-12 col-lg-6">
                                    <FormControl fullWidth required>
                                        <InputLabel id="gender">
                                            Gender
                                        </InputLabel>
                                        <Select
                                            labelId="gender"
                                            label="Gender"
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
                                        >
                                            <MenuItem value={0}>0</MenuItem>
                                            <MenuItem value={0.5}>0.5</MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={1.5}>1.5</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={2.5}>2.5</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={3.5}>3.5</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={4.5}>4.5</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>

                            <TextField
                                fullWidth
                                required
                                label="Image URL"
                                {...register("img", {
                                    required: true,
                                })}
                                placeholder="Put Your Image URL Here..."
                            />
                            <Button
                                variant="outlined"
                                color="info"
                                className="fw-bold mt-4"
                                type="submit"
                            >
                                Join
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default AddDoctor;
