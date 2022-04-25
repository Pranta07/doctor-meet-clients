import React, { useContext } from "react";
import Articles from "../../components/Articles/Articles";
import HealthCareProvider from "../../components/HealthCareProvider/HealthCareProvider";
import Review from "../../components/Review/Review";
import HomeGallery from "../../components/HomeGallery/HomeGallery";
import Services from "../../components/Services/Services";
import Banner from "../../components/Banner/Banner";
import MapDirection from "../../components/MapDirection/MapDirection";

const Home = () => {
    return (
        <>
            <Banner></Banner>

            <Services></Services>

            <HealthCareProvider></HealthCareProvider>

            <Review></Review>

            <HomeGallery></HomeGallery>

            <div className="py-5 ">
                <MapDirection></MapDirection>
            </div>

            <Articles></Articles>
        </>
    );
};

export default Home;
