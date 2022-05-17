import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SimpleProcess.css";
import { Icon } from "@iconify/react";

const SimpleProcess = () => {
  return (
    <div className="simple-process-container">
      <Container>
        <div className="diagnosis-header">
          <h1 className="diagnosis-title">Simple &#38; Quick Process</h1>
          <h6 className="diagnosis-title-content">
            In just a 4 steps you can book and appointment for diagnosis
          </h6>
          <hr />
        </div>
        {/* Second Part */}
        <div>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <div className="simple-process-card text-center">
                <div className="simple-process-img-container mb-4 d-flex justify-content-center flex-column align-items-center">
                  <Icon className="sim-icon" icon="gg:website" />
                </div>
                <hr className="simple-process-hr mb-2" />
                <div className="simple-process-content">
                  <h1 className="mb-3 simple-process-content-header">
                    Go to Website
                  </h1>
                  <h6 className="simple-process-content-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto officiis esse deleniti vero, reprehenderit dolorem?
                  </h6>
                </div>
              </div>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <div className="simple-process-card text-center">
                <div className="simple-process-img-container mb-4 d-flex justify-content-center flex-column align-items-center">
                  <Icon className="sim-icon" icon="carbon:report" />
                </div>
                <hr className="simple-process-hr mb-2" />
                <div className="simple-process-content">
                  <h1 className="mb-3 simple-process-content-header">
                    Book a Test
                  </h1>
                  <h6 className="simple-process-content-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto officiis esse deleniti vero, reprehenderit dolorem?
                  </h6>
                </div>
              </div>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <div className="simple-process-card text-center">
                <div className="simple-process-img-container mb-4 d-flex justify-content-center flex-column align-items-center">
                  <Icon className="sim-icon" icon="ph:eyedropper-sample-light" />
                </div>
                <hr className="simple-process-hr mb-2" />
                <div className="simple-process-content">
                  <h1 className="mb-3 simple-process-content-header">
                    Collect Sample
                  </h1>
                  <h6 className="simple-process-content-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto officiis esse deleniti vero, reprehenderit dolorem?
                  </h6>
                </div>
              </div>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <div className="simple-process-card text-center">
                <div className="simple-process-img-container mb-4 d-flex justify-content-center flex-column align-items-center">
                  <Icon className="sim-icon" icon="carbon:document-download" />
                </div>
                <hr className="simple-process-hr mb-2" />
                <div className="simple-process-content">
                  <h1 className="mb-3 simple-process-content-header">
                    Download Report
                  </h1>
                  <h6 className="simple-process-content-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto officiis esse deleniti vero, reprehenderit dolorem?
                  </h6>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SimpleProcess;
