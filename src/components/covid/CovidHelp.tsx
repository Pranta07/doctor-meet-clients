import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import helpImg from "../../assets/img/need-help.svg";
import useAuth from "../../hooks/useAuth";
import { useAppSelector } from "../../redux/store";
import "./CovidHelp.css";

const Help = () => {
  const { user }: any = useAppSelector((state) => state.user);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="help-section container" id="help">
      <Container>
        <h1 className="fw-bold text-center ">Need Help!</h1>
        <hr className="mx-auto hr-hight w-25" />
        <p className="text-center text-secondary w-75 my-3 mx-auto">
          <small>
            Protect yourself and others around you by knowing the facts and
            taking appropriate precautions. Floow advice provided by your local
            health authority.
          </small>
        </p>
        <div className="my-5 pt-5 text-center row ">
          <div className="col-lg-6">
            <img src={helpImg} alt="" className=" img-fluid mx-auto" />
          </div>

          <div className="col-lg-6 my-0 p-5">
            <div>
              <h2 className="text-start">COVID-19 enquiry form</h2>
              <p className="text-start py-3">
                Completing the form online has been made simpler. It should take
                no more than 20 minutes to complete. Once you have received the
                text message, you can submit the form anytime within 24 hours.
                If you do not submit the form within 72 hours, someone may call
                you and complete the case interview over the phone.
              </p>
            </div>
            <Button variant="success" className="d-block" onClick={handleShow}>
              Fill Form <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </Button>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>COVID-19 Enquiry Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="covid-contact">
                <div className="mb-3">
                  <input
                    type="text"
                    className="border-0 form-control bg-light rounded-3"
                    id="recipient-email"
                    placeholder={user?.email || ""}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="border-0 form-control bg-light rounded-3"
                    id="recipient-name"
                    placeholder={user?.name || ""}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="border-0 form-control bg-light rounded-3"
                    id="recipient-phone"
                    placeholder="Phone"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="border-0 form-control bg-light rounded-3"
                    id="recipient-symptoms"
                    placeholder="Symptoms"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="border-0 form-control bg-light rounded-3"
                    id="message-text"
                    placeholder="Message in details"
                  ></textarea>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Send Message <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
    </div>
  );
};

export default Help;
