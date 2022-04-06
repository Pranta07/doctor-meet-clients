import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import './Assets/main.css';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Registation from "./components/security/Registation/Registation";
import Login from "./components/security/Login/Login";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import CovidPortal from "./page/CovidPortal/CovidPortal";
import Home from "./page/Home/Home";

function App() {
    return (
        <>
            <AuthProvider>
                {/* mdmahim shariar */}
                <Nav></Nav>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/signUp" element={<Registation />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/ContactUs" element={<Login />}></Route>

                    {/* md mahim shariar  */}

                    {/* Suresh Pal Pranta */}

                    <Route
                        path="/CovidPortal"
                        element={<CovidPortal />}
                    ></Route>

                    {/* Suresh Pal Pranta */}

                    {/* Mostofa Reza */}

                    {/* Mostofa Reza */}

                    {/* AKTARUZZAMAN RIDOY */}

                    {/* AKTARUZZAMAN RIDOY */}

                    {/* Alamin */}

                    {/* Alamin */}

                    {/* Mahadi */}

                    {/* Mahadi */}
                </Routes>
                <Footer></Footer>
            </AuthProvider>
        </>
    );
}

export default App;
