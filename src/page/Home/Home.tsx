import React from "react";
import HealthCareProvider from "../../components/HealthCareProvider/HealthCareProvider";
import Login from "../../components/security/Login/Login";
import Services from "../../components/Services/Services";

const Home = () => {
    return (
        <>
            <Login></Login>
            <Services></Services>
            <HealthCareProvider></HealthCareProvider>
        </>
    );
};

export default Home;
