import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import {
    FormControl,
    InputLabel,
    MenuItem,
    TextField,
    Button,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import { useAppSelector } from "../../redux/store";

const AddDoctor = () => {
    const { user }: any = useAppSelector((state) => state.user);

    const [spec, setSpec] = React.useState("");
    const [gen, setGen] = React.useState("");
    const [exp, setExp] = React.useState("0");

    const handleSpec = (event: SelectChangeEvent) => {
        setSpec(event.target.value as string);
    };
    const handleGen = (event: SelectChangeEvent) => {
        setGen(event.target.value as string);
    };
    const handleExp = (event: SelectChangeEvent) => {
        setExp(event.target.value as string);
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            name: { value: string };
            email: { value: string };
            phone: { value: string };
            specialist: { value: string };
            gender: { value: string };
            img: { value: string };
            experience: { value: string };
        };
        const name = target.name?.value;
        const email = target.email?.value;
        const phone = target.phone?.value;
        const specialist = target.specialist?.value;
        const gender = target.gender?.value;
        const img = target.img?.value;
        const experience = parseFloat(target.experience?.value);
        const data = {
            name,
            email,
            phone,
            specialist,
            gender,
            img,
            experience,
        };
        // console.log(data);
        const url = `https://doctor-meet-server.herokuapp.com/api/v1/doctors/add`;
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
                        <form onSubmit={handleSubmit}>
                            <div className="row gx-3 gy-4 mb-4">
                                <div className="col-12 col-lg-6">
                                    <TextField
                                        fullWidth
                                        required
                                        label="Name"
                                        name="name"
                                        defaultValue={user?.name || ""}
                                        disabled
                                    />
                                </div>

                                <div className="col-12 col-lg-6">
                                    <TextField
                                        fullWidth
                                        required
                                        label="Email"
                                        name="email"
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
                                        name="phone"
                                    />
                                </div>

                                <div className="col-12 col-lg-6">
                                    <FormControl fullWidth>
                                        <InputLabel id="dept">
                                            Department
                                        </InputLabel>
                                        <Select
                                            value={spec}
                                            required
                                            labelId="dept"
                                            label="Department"
                                            name="specialist"
                                            defaultValue=""
                                            onChange={handleSpec}
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
                                    <FormControl fullWidth>
                                        <InputLabel id="gender">
                                            Gender
                                        </InputLabel>
                                        <Select
                                            value={gen}
                                            required
                                            labelId="gender"
                                            label="Gender"
                                            name="gender"
                                            onChange={handleGen}
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
                                            value={exp}
                                            labelId="exp"
                                            label="Experience"
                                            name="experience"
                                            onChange={handleExp}
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
                                name="img"
                                placeholder="Put Your Image URL Here..."
                            />
                            <Button
                                variant="outlined"
                                color="info"
                                className="fw-bold mt-4"
                                type="submit"
                                // onClick={handleClick}
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
