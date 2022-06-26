import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import helpImg from "../../assets/img/need-help.svg";
import { useAppSelector } from "../../redux/store";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";
import emailjs from "emailjs-com";
import "./CovidHelp.css";

const Help = () => {
    const { user }: any = useAppSelector((state) => state.user);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { enqueueSnackbar } = useSnackbar();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_euwrdad",
                "template_8fq9rsf",
                e.target,
                "user_wsFjuvxgobkwxPu52i3qs"
            )
            .then(
                (result: any) => {
                    if (result.text === "OK") {
                        handleClose();
                        enqueueSnackbar("Message sent successfully!");
                        // console.log(result.text);
                    }
                },
                (error: any) => {
                    // console.log(error.text);
                    alert(error.text + "Please try again.");
                }
            );
        e.target.reset();
    };

    return (
        <>
            <div className="help-section container" id="help">
                <Container>
                    <h1 className="fw-bold text-center">Need Help!</h1>
                    <hr className="mx-auto hr-hight w-25" />
                    <p className="text-center text-secondary w-75 my-3 mx-auto">
                        <small>
                            Protect yourself and others around you by knowing
                            the facts and taking appropriate precautions. Follow
                            advice provided by your local health authority.
                        </small>
                    </p>
                    <div className="my-5 pt-5 text-center row ">
                        <div className="col-lg-6">
                            <img
                                src={helpImg}
                                alt=""
                                className=" img-fluid mx-auto"
                            />
                        </div>

                        <div className="col-lg-6 text-start my-0 p-5">
                            <div>
                                <h2 className="text-start">
                                    COVID-19 Enquiry Form
                                </h2>
                                <p className="text-start py-3">
                                    Completing the form online has been made
                                    simpler. It should take no more than 5
                                    minutes to complete. Someone may call you
                                    and complete the case interview over the
                                    phone or email anytime within 24 hours.
                                </p>
                            </div>

                            <Button variant="contained" onClick={handleShow}>
                                Fill Form{" "}
                                <FontAwesomeIcon
                                    style={{ marginLeft: "8px" }}
                                    icon={faArrowAltCircleRight}
                                />
                            </Button>
                        </div>

                        <Modal
                            className=" mt-5"
                            show={show}
                            onHide={handleClose}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>COVID-19 Enquiry Form</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form
                                    className="covid-contact"
                                    onSubmit={sendEmail}
                                >
                                    <div className="mb-3">
                                        <input
                                            required
                                            name="email"
                                            type="text"
                                            className="border-0 form-control bg-light rounded-3"
                                            id="recipient-email"
                                            defaultValue={user?.email || ""}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            className="border-0 form-control bg-light rounded-3"
                                            id="recipient-name"
                                            defaultValue={user?.name || ""}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            required
                                            name="phone"
                                            type="text"
                                            className="border-0 form-control bg-light rounded-3"
                                            id="recipient-phone"
                                            placeholder="Phone"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            required
                                            name="symptoms"
                                            type="text"
                                            className="border-0 form-control bg-light rounded-3"
                                            id="recipient-symptoms"
                                            placeholder="Symptoms"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            required
                                            name="message"
                                            className="border-0 form-control bg-light rounded-3"
                                            id="message-text"
                                            placeholder="Message in details"
                                        ></textarea>
                                    </div>
                                    <Button type="submit" variant="contained">
                                        Send Message{" "}
                                        <FontAwesomeIcon
                                            style={{ marginLeft: "8px" }}
                                            icon={faArrowAltCircleRight}
                                        />
                                    </Button>
                                </form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="outlined"
                                    onClick={handleClose}
                                >
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Help;
