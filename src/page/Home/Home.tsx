import React from "react";
import Articles from "../../components/Articles/Articles";
import Login from "../../components/security/Login/Login";
import Services from "../../components/Services/Services";

const Home = () => {
    return (
        <>
            <Login></Login>
            <Services></Services>
            <Articles></Articles>
        </>
    );
};

export default Home;
