import React from "react";
import Articles from "../../components/Articles/Articles";
import HealthCareProvider from "../../components/HealthCareProvider/HealthCareProvider";
import Review from "../../components/Review/Review";
import HomeGallery from "../../components/HomeGallery/HomeGallery";
import Services from "../../components/Services/Services";
import Banner from "../../components/Banner/Banner";

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
