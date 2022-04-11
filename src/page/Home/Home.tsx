import React from "react";
import Articles from "../../components/Articles/Articles";
// import Banner from "../../components/Banner/Banner";
import HealthCareProvider from "../../components/HealthCareProvider/HealthCareProvider";
import Just_Banner from "../../components/just-banner/Just_Banner";
import Review from "../../components/Review/Review";
import HomeGallery from '../../components/HomeGallery/HomeGallery'
// import Login from "../../components/security/Login/Login";
// import Registation from "../../components/security/Registation/Registation";
import Services from "../../components/Services/Services";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Banner from "../../components/Banner/Banner";


const Home = () => {
    return (
        <>
            {/* alamin */}
            {/* <Banner></Banner> */}
            {/* mahadi */}
            {/* <Nav /> */}
            {/* <Just_Banner></Just_Banner> */}
            {/* <HomeBanner></HomeBanner> */}
             <Banner></Banner>
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

            {/* alamin */}
            {/* <VideoChatRoute></VideoChatRoute> */}
            <HomeGallery></HomeGallery>
            
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
