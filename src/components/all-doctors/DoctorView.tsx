import { Alert, Button, Container, Snackbar } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import "./DoctorView.css";
import MapDirection from "../map-direction/MapDirection";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { Icon } from "@iconify/react";
import emailjs from "emailjs-com";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppSelector } from "../../redux/store";
import Swal from "sweetalert2";
import Slider from "react-slick";
import { styled } from "@mui/material/styles";
import DoctorReview from "./DoctorReview";
const RootStyle = styled("div")(({ theme }: any) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));


const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  autoplay: true,

  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
};


const DoctorView = () => {
  const { user }: any = useAppSelector((state) => state.user);

  let [doctor, setDoctors] = useState<any>({});
  let [address, setAddress] = useState<any>({});
  let [userReview, setUserReview] = useState<any[]>([]);
  let { id } = useParams();
  const [rating, setRating] = React.useState<number | null>(5);

  const [apGender, setApGender] = React.useState("");
  const [apbloodGruop, setApBloodGruop] = React.useState("");

  const handleGenderChange = (event: SelectChangeEvent) => {
    setApGender(event.target.value as string);
  };
  const handleBloodGruopChange = (event: SelectChangeEvent) => {
    setApBloodGruop(event.target.value as string);
  };
  const [date, setDate] = React.useState<Date | string | number>(new Date());
  const [time, setTime] = React.useState<Date | string | number>(
    new Date(date)
  );

  const form = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      xs: "95%",
      sm: "80%",
      md: "70%",
    },
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    fetch(
      `https://doctor-meet-server.herokuapp.com/api/v1/doctors/single/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data.data[0]);
        setAddress(data.data[0].address[0]);
        setUserReview(data.data[0].UserReview)
      });
  }, [id]);

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_at6a56q",
        "template_bg4eths",
        e.target,
        "user_NRf7diQwuUv2Bb08KfTHH"
      )
      .then(
        (result: any) => {
          if (result.text === "OK") {
            handleClick();
          }
        },
        (error: any) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleClickModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleReviewSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      Name: { value: string };
      email: { value: string };
      feedback: { value: string };
    };
    const name = target.Name?.value;
    const email = target.email?.value;
    const feedback = target.feedback?.value;
    const UserReview = { name, email, rating, feedback };
    // console.log(review);

    //send review data to server
    fetch(
      `https://doctor-meet-server.herokuapp.com/api/v1/UserReview/single/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(UserReview),
      }
    ).then((res) => {
      if (res.status === 200) {
        target.feedback.value = "";
        Swal.fire("Success!", "Review added!", "success");
      }
    });
  };

  const handleBookSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      patientName: { value: string };
      patientEmail: { value: string };
      height: { value: string };
      weight: { value: string };
      healthIssues: { value: string };
      age: { value: string };
    };

    const patientName = target.patientName?.value;
    const patientEmail = target.patientEmail?.value;
    const age = target.age?.value;
    const height = target.height?.value;
    const weight = target.weight?.value;
    const healthIssues = target.healthIssues.value;
    const appointmentTime = time;
    const appointmentDate = date;
    const gender = apGender;
    const bloodGroup = apbloodGruop;
    const doctorInfo = {
      id: doctor._id,
      name: doctor.name,
      username: doctor.username,
      email: doctor.email,
      img: doctor.img,
      specialist: doctor.specialist,
      timeSlot: doctor.appointmentDay,
      visit: doctor.visit,
    };

    const addapointment = {
      patientName,
      patientEmail,
      age,
      height,
      weight,
      healthIssues,
      appointmentTime,
      appointmentDate,
      gender,
      bloodGroup,
      doctorInfo,
    };

    // console.log(addapointment);

    // console.log(review);

    //send review data to server
    fetch(`https://doctor-meet-server.herokuapp.com/api/v1/appointment/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addapointment),
    }).then((res) => {
      if (res.status === 200) {
        handleCloseModal();
        Swal.fire("Success!", "Appointment booked!", "success");
      }
    });
  };

  return (
    <RootStyle>
      <div
        className="my-5 text-center"
        style={{
          backgroundColor: "#f5f5f5",
          padding: "100px",
          marginBottom: "50px",
        }}
      >
        <h1> Doctor Details </h1>
        <span>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            Home
          </NavLink>
        </span>
        {" > "} <span> Doctor Details </span>
      </div>
      <Container className="my-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="row border ">
              <div className="col-lg-4 ps-0 ">
                <div className="">
                  <img className="img-fluid  " src={doctor?.img} alt="" />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="p-2 pb-0">
                  <h4
                    style={{
                      fontSize: "22px",
                      fontWeight: " 700",
                      letterSpacing: " 1px",
                      color: " #0783b5",
                    }}
                  >
                    {" "}
                    {doctor?.name}{" "}
                  </h4>
                  <p>
                    <Rating
                      name="read-only"
                      value={parseInt(doctor?.review)}
                      readOnly
                      size="small"
                      precision={0.5}
                    />
                    <span
                      className="my-auto"
                      style={{
                        color: "gray",
                        fontSize: "14px",
                        textAlign: "center",
                      }}
                    >
                      ({doctor?.numberOfReview})
                    </span>
                  </p>
                  <h6
                    style={{
                      color: "#0783b5",
                      fontWeight: "700",
                    }}
                  >
                    {" "}
                    {doctor?.specialist}{" "}
                  </h6>
                  <div className="dis-text" style={{ lineHeight: "14px" }}>
                    <p>
                      {" "}
                      <span>
                        {" "}
                        <Icon icon="arcticons:phone" />{" "}
                      </span>
                      {doctor?.phone}{" "}
                    </p>
                    <p>
                      {" "}
                      <span>
                        {" "}
                        <Icon icon="ic:outline-alternate-email" />{" "}
                      </span>
                      {doctor?.email}{" "}
                    </p>
                    <p>
                      {" "}
                      <span>
                        {" "}
                        <Icon icon="ep:location" />{" "}
                      </span>{" "}
                      {address?.street} , {address?.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="all-btn-style row ">
              <button className="col-lg-4 col-md-4 col-sm-6 border-0">
                {" "}
                Overview{" "}
              </button>

              <button className="col-lg-4 col-md-4 col-sm-6 border-0">
                {" "}
                Review{" "}
              </button>
              <button className="col-lg-4 col-md-4 col-sm-12 border-0">
                {" "}
                Location & Contact{" "}
              </button>
            </div>
            <div className="my-5">
              <h3 style={{ color: "#0783b5" }}> Overview Of {doctor?.name} </h3>
              <hr />
              <div className="row">
                <div className="col-lg-6 border-right-style">
                  <ul className="ul-style-in-view">
                    <li>Full Name: {doctor?.name}</li>
                    <li>User Name: {doctor?.username}</li>
                    <li>Specialist: {doctor?.specialist}</li>
                    <li>Emai: {doctor?.email}</li>
                    <li> Phone: {doctor?.phone} </li>
                    <li> Website: {doctor?.website} </li>
                    <li> experience: {doctor?.experience} year </li>
                  </ul>
                </div>
                <div className="col-lg-6 address-style ">
                  <h5 style={{ color: "#0783b5" }}> Address </h5>
                  <p>
                    {address?.street} ,{address?.suite} , {address?.city} ,{" "}
                    {address?.zipcode}
                  </p>
                  <h5 style={{ color: "#0783b5" }}> Appointment Day</h5>
                  <p> {doctor?.appointmentDay}</p>
                </div>
              </div>
              <div className="my-5">
                <h3 style={{ color: "#0783b5" }}>
                  {" "}
                  {doctor?.name} Location & Contact Information{" "}
                </h3>
                <hr />
                <div className="my-5">
                  <MapDirection />

                  <h4 className="mt-5" style={{ color: "#0783b5" }}>
                    {" "}
                    Hospital Address{" "}
                  </h4>
                  <hr />
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6  all-address">
                      <div>
                        <span>
                          {" "}
                          <Icon icon="ep:location" />{" "}
                        </span>{" "}
                      </div>
                      <div className="all-address-content">
                        <p>
                          {" "}
                          {address?.street} , {address?.city}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6  all-address">
                      <div>
                        <span>
                          {" "}
                          <Icon icon="arcticons:phone" />{" "}
                        </span>
                      </div>
                      <div className="all-address-content">
                        <p> {doctor?.phone} </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12  all-address ">
                      <div>
                        <span>
                          {" "}
                          <Icon icon="ic:outline-alternate-email" />{" "}
                        </span>
                      </div>
                      <div className="all-address-content">
                        <p> {doctor?.email} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 style={{ color: "#0783b5" }}> Patient Experience </h3>
            <hr />
            <div className="mt-5" style={{ color: "#0783b5" }}>
              <Slider {...settings}>
                {userReview.map((review: any) => (
                  <DoctorReview
                    key={review._id}
                    review={review}
                  ></DoctorReview>
                ))}
              </Slider>
            </div>
            <h3 className="mt-5" style={{ color: "#0783b5" }}>
              {" "}
              Patient Review{" "}
            </h3>
            <hr />

            <p
              style={{
                display: "flex",
                fontWeight: " 600",
                color: "#0783b5",
              }}
              className="my-3"
            >
              Your Rating:{" "}
              <Rating
                name="rating"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </p>

            <form onSubmit={handleReviewSubmit}>
              <div className="mb-3 row">
                <div className="col">
                  <input
                    type="text"
                    name="Name"
                    required
                    readOnly
                    defaultValue={user?.name}
                    className="form-control"
                    placeholder="Name *"
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    required
                    readOnly
                    defaultValue={user?.email}
                    className="form-control"
                    placeholder="Email *"
                    aria-label=""
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  name="feedback"
                  required
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Your Reviw *"
                  style={{ height: "100px" }}
                ></textarea>
              </div>
              <button className="btn btn-style-doc">Send</button>
            </form>
          </div>
          <div className="col-lg-4 my-5">
            <div className="container">
              <div
                className="p-4"
                style={{
                  boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
              >
                <h3 className="my-4 " style={{ color: "#0783b5" }}>
                  {" "}
                  Booking Summary{" "}
                </h3>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <MobileDatePicker
                      label="Date"
                      value={date}
                      onChange={(newValue) => {
                        if (newValue === null) {
                          return;
                        } else {
                          setDate(newValue);
                        }
                      }}
                      renderInput={(params) => <TextField {...params} />}
                      className="my-3"
                    />
                    <MobileTimePicker
                      label="Time"
                      value={time}
                      onChange={(newValue) => {
                        if (newValue === null) {
                          return;
                        } else {
                          setTime(newValue);
                        }
                      }}
                      renderInput={(params) => <TextField {...params} />}
                      className="my-3"
                    />
                  </Stack>
                </LocalizationProvider>
                <div className="my-3">
                  <Button onClick={handleClickModal} variant="contained">
                    Book Appointment
                  </Button>
                </div>
              </div>
              <div
                style={{
                  boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
                className=" my-5 p-4"
              >
                <h3 style={{ color: "#0783b5" }} className="my-3">
                  {" "}
                  Get in Touch{" "}
                </h3>
                <div>
                  <form ref={form} onSubmit={sendEmail}>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      className="my-2"
                      fullWidth
                      required
                      name="from_name"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      type="email"
                      className="my-2"
                      fullWidth
                      name="user_email"
                      required
                    />
                    <TextField
                      id="outlined-basic"
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      className="my-2"
                      fullWidth
                      name="message"
                      required
                    />
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                    >
                      <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{
                          width: "100%",
                          fontWeight: "500",
                        }}
                      >
                        message is Successfully sended
                      </Alert>
                    </Snackbar>
                    <Button type="submit" variant="contained">
                      {" "}
                      Send <Icon icon="fluent:send-24-filled" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} style={{ borderRadius: "10px" }}>
                <h4 className="fw-bold text-info my-5 mx-3">
                  Provide Your Detailed Information
                </h4>
                <div className="container">
                  <form className="row all-input" onSubmit={handleBookSubmit}>
                    <div className="col-lg-6 col-md-6 col-sm-6 my-2">
                      <TextField
                        id="outlined-basic"
                        label="Patient Name"
                        name="patientName"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={user?.name}
                        disabled
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 my-2">
                      <TextField
                        id="outlined-basic"
                        label="Patient Email"
                        name="patientEmail"
                        variant="outlined"
                        fullWidth
                        required
                        defaultValue={user?.email}
                        disabled
                      />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 my-2">
                      <TextField
                        id="outlined-basic"
                        label="height"
                        variant="outlined"
                        name="height"
                        fullWidth
                        required
                      />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 my-2">
                      <TextField
                        id="outlined-basic"
                        label="weight"
                        name="weight"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </div>
                    <div className="my-2 col-lg-4 col-md-4 col-sm-4 ">
                      <TextField
                        id="outlined-basic"
                        label="Age"
                        name="age"
                        type="number"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </div>
                    <div className="my-2 col-lg-6 col-md-6 col-sm-6 ">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Gender
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={apGender}
                          label="Gender"
                          required
                          onChange={handleGenderChange}
                        >
                          <MenuItem value={"male"}>Male</MenuItem>
                          <MenuItem value={"female"}>Female</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="my-2 col-lg-6 col-md-6 col-sm-6">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Blood Group
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={apbloodGruop}
                          required
                          label="Blood Group"
                          onChange={handleBloodGruopChange}
                        >
                          <MenuItem value={"A+"}>A+</MenuItem>
                          <MenuItem value={"A-"}>A-</MenuItem>
                          <MenuItem value={"B+"}>B+</MenuItem>
                          <MenuItem value={"B-"}>B-</MenuItem>
                          <MenuItem value={"O+"}>O+</MenuItem>
                          <MenuItem value={"O-"}>O-</MenuItem>
                          <MenuItem value={"AB+"}>AB+</MenuItem>
                          <MenuItem value={"AB-"}>AB-</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="my-2 col-lg-12">
                      <TextField
                        id="outlined-basic"
                        label="health Issues"
                        variant="outlined"
                        multiline
                        rows={4}
                        className="my-2"
                        fullWidth
                        name="healthIssues"
                        required
                      />
                    </div>
                    <Box sx={{ my: 2 }}>
                      <Button type="submit" variant="contained">
                        Book Appointment
                      </Button>
                    </Box>
                  </form>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </Container>
    </RootStyle>
  );
};

export default DoctorView;