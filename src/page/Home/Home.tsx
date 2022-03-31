import React from "react";
import Login from "../../components/security/Login/Login";
import Registation from "../../components/security/Registation/Registation";
import Services from "../../components/Services/Services";

const Home = () => {
    return (
        <>
            <Login></Login>
            <Services></Services>
            <Registation></Registation>
        </>
    );
};

export default Home;
