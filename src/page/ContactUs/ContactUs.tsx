import emailjs from "emailjs-com";
import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ContactUsImg from "../../Assets/ContactUs/ContactUs.jpg";
import Maps from "../../components/maps/Maps";
import "./ContactUs.css";

const ContactUs = () => {
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
            alert("Your Message Was Successfully Sent. Thank You !");
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
    <div className="ContactUs-section my-5">
      <div
        className="my-5 text-center "
        style={{ backgroundColor: "#f5f5f5", padding: "100px", margin: 0 }}
      >
        <h1> Contact us </h1>
        <span>
          {" "}
          <NavLink to="/">Home</NavLink>{" "}
        </span>{" "}
        <span> {">"} </span> <span> Contact us </span>
      </div>
      <Container>
        <div className="p-3">
          <h5> Email us with ease </h5>
          <hr className="hr-blue" />
          <div>
            <h1 className="h1-hight" >
              {" "}
              Get in <span className="contact-color">Touch</span>
            </h1>
            <h6 className="w-50 p-style-con">
              {" "}
              Proactively envisioned multimedia based expertise and cross-media
              growth strategies. Seamlessly visualize quality intellectual
              capital.{" "}
            </h6>
          </div>
        </div>
        <form onSubmit={sendEmail}>
          <div className="row d-flex flex-sm-row-reverse">
            <div className="col-lg-6">
              <Maps></Maps>
            </div>
            <div className="col-lg-6">
              <div className="row pt-2 mx-auto ">
                <div className="col-10 form-group ">
                  <label className="all-label" htmlFor="nameId">Your Name (required)</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="nameId"
                  />
                </div>
                <div className="col-10 form-group pt-3 ">
                <label className="all-label" htmlFor="emailId">Your Email (required)</label>
                  <input
                    className="form-control"
                    type="email"
                    id="emailId"
                  />
                </div>
                <div className="col-10 form-group pt-3 ">
                  <label className="all-label" htmlFor="subjectId"> Subject </label>
                  <input
                    className="form-control"
                    type="text"
                    name="subject"
                    id="subjectId"
                  />
                </div>
                <div className="col-10 form-group pt-3 ">
                  <label className="all-label" htmlFor="messageID"> Your Message </label>
                  <textarea
                    className="form-control"
                    name="message"
                    id="messageID"
                    cols={30}
                    rows={8}
                  ></textarea>
                </div>
                <div className="col-10 form-group pt-3 ">
                  <input
                    className="btn btn-outline-info fw-bold"
                    type="submit"
                    value="Send Message"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ContactUs;
