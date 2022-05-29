import { Icon } from "@iconify/react";
import React from "react";
import "./ContactInfo.css";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));
const ContactInfo = () => {
  return (
    <RootStyle>
      <div className="bg-style-for-contact">
        <div className="container">
          <div className="row g-3 p-5 my-auto d-flex align-items-center">
            <div className="col-lg-3 text-light">
              <div className="d-flex align-items-center">
                <div className="contact-us-btn mx-3">
                  <span className="text-center">
                    {" "}
                    <Icon icon="cil:hospital" />{" "}
                  </span>
                </div>
                <div>
                  <h6 className="fw-bold"> ADDRESS </h6>
                  <small>
                    <p className="m-0">
                      House No#1, 8 Satmasjid Road, Dhaka 1207
                    </p>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex text-light align-items-center">
                <div className="contact-us-btn mx-3">
                  <span className="text-center">
                    {" "}
                    <Icon icon="fluent:call-add-24-regular" />
                  </span>
                </div>
                <div>
                  <h6 className="fw-bold"> CALL US </h6>
                  <small>
                    <p className="m-0">
                      +8809003439 <br />
                      +8809003440
                    </p>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex text-light align-items-center">
                <div className="contact-us-btn-write mx-3">
                  <span className="text-center">
                    {" "}
                    <Icon icon="fontisto:prescription" />
                  </span>
                </div>
                <div>
                  <h6 className="fw-bold"> WRITE TO US </h6>
                  <small>
                    <p className="m-0">office@medicare.com book@medicare.com</p>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex text-light align-items-center">
                <div className="contact-us-btn mx-3">
                  <span className="text-center">
                    {" "}
                    <Icon icon="iconoir:healthcare" />
                  </span>
                </div>
                <div>
                  <h6 className="fw-bold"> BOOK AN APPOINTMENT </h6>
                  <small>
                    <p className="m-0">
                      Click here to book an appointment at Medicare.
                    </p>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootStyle>
  );
};

export default ContactInfo;
