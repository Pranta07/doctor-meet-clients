import { styled } from "@mui/material/styles";
import React from "react";
import { Carousel } from "react-bootstrap";
import "./DiagnosticCenterBanner.css";


const RootStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  height: "100%",
  overflow: "hidden",
  backgroundColor: theme.palette.background.default,
}))

const DiagnosticCenterBanner = () => {
  return (
    <RootStyle>
      <div className="diagnostic-banner-container">
        <Carousel fade indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100 diagnostic-banner-img"
              src="https://images.pexels.com/photos/7089017/pexels-photo-7089017.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="diagnostic-carousel-title">
                <span> Advance Medical </span> Equipments
              </h3>
              <p className="diagnostic-carousel-para">
                Modern technology based equipments are used here.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
              <img
                className="d-block w-50 diagnostic-banner-img"
                src="https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg"
                alt="Second slide"
              />
              <img
                className="d-block w-50 diagnostic-banner-img"
                src="https://images.pexels.com/photos/4226925/pexels-photo-4226925.jpeg"
                alt="Second slide 2"
              />
            </div>

            <Carousel.Caption>
              <h3 className="diagnostic-carousel-title">
                Fast Report <span>  Delivery </span>
              </h3>
              <p className="diagnostic-carousel-para">
                Super fast report delivery within seconds.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 diagnostic-banner-img"
              src="https://images.pexels.com/photos/3825541/pexels-photo-3825541.jpeg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="diagnostic-carousel-title"> <span> Enriched </span>Laboratory</h3>
              <p className="diagnostic-carousel-para">
                Fully equipped laboratory.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </RootStyle>
  );
};

export default DiagnosticCenterBanner;
