import React, { useContext } from "react";
import Articles from "../articles/Articles";
import HealthCareProvider from "../../components/health-care-provider/HealthCareProvider";
import Review from "../../components/review/Review";
import HomeGallery from "../../components/home-gallery/HomeGallery";
import Services from "../../components/services/Services";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <>
      <Banner></Banner>

      <Services></Services>

      <HealthCareProvider></HealthCareProvider>

      <Review></Review>

      <HomeGallery></HomeGallery>

      <Articles></Articles>
    </>
  );
};

export default Home;
