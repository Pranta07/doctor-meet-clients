import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Doctors from "./components/Doctors/Doctors";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import PharmecyHome from "./components/Pharmecy/PharmecyHome/PharmecyHome";
import Login from "./components/security/Login/Login";
import Registation from "./components/security/Registation/Registation";
import VideoChatRoute from "./components/VideoChatClient/VideoChatRoute";
import AuthProvider from "./context/AuthProvider";
import ContactUs from "./page/ContactUs/ContactUs";
import CovidPortal from "./page/CovidPortal/CovidPortal";
import Admin from "./page/Dashboards/Admin/Admin";
import Dashboard from "./page/Dashboards/Dashboard/Dashboard";
import DashboardHome from "./page/Dashboards/DashboardHome/DashboardHome";
import Doctor from "./page/Dashboards/Doctor/Doctor";

import FindDonors from "./page/FindDonors/FindDonors";
import Home from "./page/Home/Home";
import Profile from "./page/Profile/Profile";

function App() {
  return (
    <>
      <AuthProvider>
        {/* mdmahim shariar */}
        <Nav></Nav>
        <Routes>
          {/* Mostofa Reza */}

          {/* AKTARUZZAMAN RIDOY */}

          {/* AKTARUZZAMAN RIDOY */}

          {/* Alamin */}

          <Route path="/" element={<Home />}></Route>
          <Route path="/signUp" element={<Registation />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/pharma" element={<PharmecyHome/>}></Route>
          <Route path="/videoRoute" element={<VideoChatRoute />}></Route>
          <Route path="/pharma" element={<PharmecyHome />}></Route>
          {/* md mahim shariar  */}

          {/* Suresh Pal Pranta */}
          <Route path="/CovidPortal" element={<CovidPortal />}></Route>
          <Route path="/FindDonors" element={<FindDonors />}></Route>

          {/* Suresh Pal Pranta */}

          {/* Mostofa Reza */}

          {/* Mostofa Reza */}

          {/* AKTARUZZAMAN RIDOY */}
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="dashboarHome" element={<DashboardHome />} />
            <Route path="doctor" element={<Doctor />} />
            <Route path="admin" element={<Admin />} />
          </Route>

          {/* AKTARUZZAMAN RIDOY */}

          {/* Alamin */}

          {/* md mahim shariar  */}

          {/* Suresh Pal Pranta */}

          {/* Suresh Pal Pranta */}

          {/* Mostofa Reza */}

          {/* Mostofa Reza */}

          {/* AKTARUZZAMAN RIDOY */}

          {/* AKTARUZZAMAN RIDOY */}

          {/* Alamin */}

          {/* Alamin */}

          {/* Mahadi */}

          <Route path="/doctors" element={<Doctors />}></Route>

          {/* Mahadi */}
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </>
  );
}

export default App;
