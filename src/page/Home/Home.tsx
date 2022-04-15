import React from "react";
import Articles from "../../components/Articles/Articles";
// import Banner from "../../components/Banner/Banner";
import HealthCareProvider from "../../components/HealthCareProvider/HealthCareProvider";
import Just_Banner from "../../components/just-banner/Just_Banner";
import Review from "../../components/Review/Review";
import HomeGallery from "../../components/HomeGallery/HomeGallery";
// import Login from "../../components/security/Login/Login";
// import Registation from "../../components/security/Registation/Registation";
import Services from "../../components/Services/Services";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Banner from "../../components/Banner/Banner";
import Pharmecy_Banner from "../../components/Pharmecy/Pharmecy_Banner/Pharmecy_Banner";

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
