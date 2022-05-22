import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import { TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useAppSelector } from "../../../redux/store";
import "./JoinUsForm.css";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
        xs: "90%",
        md: "80%",
        lg: "70%",
        xl: "60%",
    },
    height: "90vh",
    backgroundColor: "background.paper",
    border: "1px solid white",
    borderRadius: "10px",
    boxShadow: 24,
    p: 2,
    overflowY: "scroll",
};

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
    // const { user } = useAuth();
    const { user }: any = useAppSelector((state) => state.user);
    const { register, handleSubmit } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    // send data to server and store in database
    fetch("http://localhost:5000/api/v1/donor/add", {
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
        <>
            <Modal
                open={show}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h4 className="text-center fw-bold">
                        Join us in <span className="text-danger">Blood </span>{" "}
                        Donors Community
                    </h4>

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
                                                defaultValue={user?.name || ""}
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
                                                defaultValue={user?.email || ""}
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
                                        placeholder="Put Your Image URL Here..."
                                    />

                                    <Button
                                        variant="outlined"
                                        color="error"
                                        className="fw-bold mt-4"
                                        type="submit"
                                    >
                                        Join Us{" "}
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
};

export default JoinUsForm;
