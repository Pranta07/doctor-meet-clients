import React from "react";
import Carousel from "react-bootstrap/Carousel";
import TextAnimation from "./TextAnimation";
import VM from "../../assets/carousel/handdrawn-vector-60-removebg-preview.png";
import FD from "../../assets/carousel/doctors.svg";
import Medicine from "../../assets/carousel/undraw_monitoring.svg";
import "./Banner.css";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  backgroundColor: theme.palette.background.default,
}));

const bannerData = [
  {
    text1: "Virtual Healthcare",
    text2: "For You",
    desc: "Doctor-meet provides progressive, and affordable healthcare, accessible on mobile and online for everyone.",
    btnText: "Consult Today",
    imgSrc: VM,
    to: "/virtual-meet",
  },
  {
    text1: "Fight",
    text2: "Covid-19",
    desc: "From 2020 we start a mission to provide free medical consultation to those who are affected with Covid-19",
    btnText: "Explore Now",
    imgSrc:
      "https://i.ibb.co/Wg8LFP0/istockphoto-1215660193-170667a-removebg-preview.png",
    to: "/covid-portal",
  },
  {
    text1: "Emergency",
    text2: "Consultant",
    desc: "Doctor Meet Provide An Emergency Health Consultant Within 1 Hour to Our Premium Members.",
    btnText: "Get Premium Membership",
    imgSrc: "https://i.ibb.co/ZzsNLrc/4162622-1-removebg-preview.png",
    to: "/premium-membership",
  },
  {
    text1: "Find",
    text2: "Doctors",
    desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals.",
    btnText: "Find Now",
    imgSrc: FD,
    to: "/doctors",
  },
  {
    text1: "Online",
    text2: "Pharmacy",
    desc: "Buy your medicines prescribed by the doctor from our online pharmacy. Within 24 hours delivery.",
    btnText: "Buy Now",
    imgSrc: Medicine,
    to: "/pharmacy",
  },
];

const Banner = () => {
  return (
    <RootStyle>
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
                <TextAnimation item={item}></TextAnimation>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </RootStyle>
  );
};

export default Banner;
