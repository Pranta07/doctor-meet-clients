import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Doctors from "./components/Doctors/Doctors";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Login from "./components/security/Login/Login";
import Registation from "./components/security/Registation/Registation";
import VideoChatRoute from "./components/VideoChatClient/VideoChatRoute";
import AuthProvider from "./context/AuthProvider";
import ContactUs from "./page/ContactUs/ContactUs";
import CovidPortal from "./page/CovidPortal/CovidPortal";
import FindDonors from "./page/FindDonors/FindDonors";
import Home from "./page/Home/Home";
import Profile from "./page/Profile/Profile";
import "./App.css";
import FavoriteDoctors from "./components/UserDashboard/FavoriteDoctors/FavoriteDoctors";
import AllDoctors from "./components/UserDashboard/AllDoctors/AllDoctors";

function App() {
    return (
        <>
            <AuthProvider>
                <Nav></Nav>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/signUp" element={<Registation />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/ContactUs" element={<ContactUs />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>

                    <Route
                        path="/videoRoute"
                        element={<VideoChatRoute />}
                    ></Route>

                    <Route
                        path="/CovidPortal"
                        element={<CovidPortal />}
                    ></Route>
                    <Route path="/FindDonors" element={<FindDonors />}></Route>
                    <Route
                        path="/favdoc"
                        element={<FavoriteDoctors></FavoriteDoctors>}
                    ></Route>
                    <Route
                        path="/alldoc"
                        element={<AllDoctors></AllDoctors>}
                    ></Route>

                    <Route path="/doctors" element={<Doctors />}></Route>
                </Routes>
                <Footer></Footer>
            </AuthProvider>
        </>
    );
}

export default App;
