import React from "react";
import Articles from "../../components/Articles/Articles";
// import Banner from "../../components/Banner/Banner";
import HealthCareProvider from "../../components/HealthCareProvider/HealthCareProvider";
import Just_Banner from "../../components/just-banner/Just_Banner";
import Nav from "../../components/Nav/Nav";
import Review from "../../components/Review/Review";
// import Login from "../../components/security/Login/Login";
// import Registation from "../../components/security/Registation/Registation";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <>
      {/* alamin */}
      {/* <Banner></Banner> */}
      {/* mahadi */}
      {/* <Nav /> */}
      <Just_Banner></Just_Banner>

      {/* mahadi */}
      {/* <Login></Login> */}
      <Services></Services>
      {/* PRANTHA */}

      {/* PRANTHA */}
      {/* ridoy */}

      <HealthCareProvider></HealthCareProvider>

      {/* ridoy */}

      {/* mahim */}
      {/* <Registation></Registation> */}

      <Review></Review>

      {/* mahim */}

      {/* mostofa */}
      <Articles></Articles>

      {/* ridoy */}
      {/* mostofa */}

      {/* mostofa */}
      {/* ridoy */}

      {/* ridoy */}
    </>
  );
};

export default Home;
