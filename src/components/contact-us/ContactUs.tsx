import React from "react";
import { useSnackbar } from "notistack";
import emailjs from "emailjs-com";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./ContactUs.css";
import MapDirection from "../map-direction/MapDirection";
import { styled } from "@mui/material/styles";
import Page from "../Page";
import { Box } from "@mui/system";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactImg from "../../assets/undraw_contact_us.svg";
import Button from "@mui/material/Button";

const RootStyle = styled("div")(({ theme }: any) => ({
  minHeight: "100%",
  backgroundColor: theme.palette.background.default,

  paddingTop: theme.spacing(15),
}));

const ContactUs = () => {
  const { enqueueSnackbar } = useSnackbar();
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_429c7ul",
        "template_dr9cfyd",
        e.target,
        "M9AHQR1dWtEHnJG3q"
      )
      .then(
        (result: any) => {
          if (result.text === "OK") {
            enqueueSnackbar("Message sent successfully!");
            console.log(result.text);
          }
        },
        (error: any) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Page title="Contact">
      <RootStyle>
        <div
          className="my-5 text-center "
          style={{
            backgroundColor: "#f5f5f5",
            padding: "100px",
            margin: 0,
          }}
        >
          <h1> Contact us </h1>
          <span>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              Home
            </NavLink>
          </span>
          <span>{" > "}</span> <span>Contact Us</span>
        </div>

        <Container>
          <div className="py-3">
            <h5> Email us with ease </h5>
            <hr className="hr-blue" />
          </div>

          <div className="row d-flex align-items-center mb-5">
            <div className="col-lg-6">
              <div className="pb-2">
                <h1 className="h1-hight">
                  Get in
                  <span className="contact-color"> Touch</span>
                </h1>
                <small className="text-secondary">
                  Doctors Meet Up provides progressive, and affordable
                  healthcare, accessible on mobile and online for everyone.
                </small>
              </div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  my: 2,
                }}
              >
                <EmailIcon sx={{ mr: 2, color: "#526ff3" }} />
                <div>
                  <p
                    style={{
                      display: "flex",
                      fontWeight: "bold",
                    }}
                  >
                    Email
                  </p>
                  <p>doctor.meet@gmail.com</p>
                </div>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  my: 2,
                }}
              >
                <PhoneIcon sx={{ mr: 2, color: "#526ff3" }} />
                <div>
                  <p
                    style={{
                      display: "flex",
                      fontWeight: "bold",
                    }}
                  >
                    Phone
                  </p>
                  <p>+88018********</p>
                </div>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  my: 2,
                }}
              >
                <RoomIcon sx={{ mr: 2, color: "#526ff3" }} />
                <div>
                  <p
                    style={{
                      display: "flex",
                      fontWeight: "bold",
                    }}
                  >
                    Address
                  </p>
                  <p>Chittagong-4100, Bangladesh</p>
                </div>
              </Box>
              <hr />
              <p className="fw-bold">FOLLOW US ON</p>
              <FacebookIcon className="social-icon" />
              <TwitterIcon className="social-icon" />
              <InstagramIcon className="social-icon" />
              <LinkedInIcon className="social-icon" />
            </div>
            <div className="col-lg-6 mt-3">
              <MapDirection></MapDirection>
            </div>
          </div>

          <div className="row d-flex align-items-center py-5 my-5">
            <div className="col-lg-6">
              <img src={ContactImg} alt="" className="w-100" />
            </div>
            <div className="col-lg-6">
              <form onSubmit={sendEmail}>
                <div className="row pt-2 mx-auto">
                  <h4 className="fw-bold">Drop Us A Line</h4>
                  <p className="text-secondary">
                    <small>We normally respond within 24 hours.</small>
                  </p>
                  <div className="col-12 col-md-10 form-group">
                    <label className="all-label" htmlFor="nameId">
                      Your Name *
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      id="nameId"
                    />
                  </div>
                  <div className="col-12 col-md-10 form-group pt-3">
                    <label className="all-label" htmlFor="emailId">
                      Your Email *
                    </label>
                    <input className="form-control" type="email" id="emailId" />
                  </div>
                  <div className="col-12 col-md-10 form-group pt-3 ">
                    <label className="all-label" htmlFor="subjectId">
                      Subject
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="subject"
                      id="subjectId"
                    />
                  </div>
                  <div className="col-12 col-md-10 form-group pt-3 ">
                    <label className="all-label" htmlFor="messageID">
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="messageID"
                      cols={30}
                      rows={5}
                    ></textarea>
                  </div>
                  <div className="pt-3">
                    <Button type="submit" variant="contained">
                      Send Message
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </RootStyle>
    </Page>
  );
};

export default ContactUs;
