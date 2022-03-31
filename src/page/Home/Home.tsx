import React from "react";
import Footer from "../../components/Footer/Footer";
import Login from "../../components/security/Login/Login";
import Services from "../../components/Services/Services";

const Home = () => {
    return (
        <>
            <Login></Login>
            <Services></Services>
            <Footer></Footer>
        </>
    );
};

export default Home;
