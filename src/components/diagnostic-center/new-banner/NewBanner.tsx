import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./NewBanner.css";
import AM from "../../../assets/diagnostic/undraw_medical_care_movn.svg";
import FIR from "../../../assets/diagnostic/undraw_injured_9757.svg";
import ELS from "../../../assets/diagnostic/undraw_medical_research_qg4d.svg";
import SingleBanner from "./SingleBanner";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  backgroundColor: theme.palette.background.default,
}));
const bannerData = [
  {
    text1: "Advance Medical",
    text2: "Cares",
    desc: "Doctor-meet provides progressive, and affordable healthcare, accessible on mobile and online for everyone.",
    imgSrc: AM,
  },
  {
    text1: "Fastest Injury",
    text2: "Recovery",
    desc: "From 2020 we start a mission to provide free medical consultation to those who are affected with Covid-19",
    imgSrc: FIR,
  },
  {
    text1: "Enriched Labratory",
    text2: "Specialist",
    desc: "Doctor Meet Provide An Emergency Health Consultant Within 1 Hour to Our Premium Members.",
    imgSrc: ELS,
  },
];

const NewBanner = () => {
  return (
    <RootStyle className="my-5 py-5">
      <Carousel fade={true} controls={true} indicators={false}>
        {bannerData.map((item, index) => (
          <Carousel.Item key={index} interval={2000}>
            <div className="container mx-auto row g-3 d-flex align-items-center flex-sm-row-reverse flex-row">
              <div className="col-12 col-lg-6">
                <img
                  className="d-block mx-auto img-fluid carousel-img"
                  style={{ height: "400px" }}
                  src={item.imgSrc}
                  alt="..."
                />
              </div>
              <div className="col-12 col-lg-6">
                <SingleBanner item={item}></SingleBanner>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </RootStyle>
  );
};

export default NewBanner;
