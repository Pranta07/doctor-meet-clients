import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Login from './components/security/Login/Login';
import Registation from './components/security/Registation/Registation';
import VideoChatRoute from './components/VideoChatClient/VideoChatRoute';
import AuthProvider from './context/AuthProvider';
import ContactUs from './page/ContactUs/ContactUs';
import CovidPortal from './page/CovidPortal/CovidPortal';
import FindDonors from './page/FindDonors/FindDonors';
import Home from './page/Home/Home';
import Profile from './page/Profile/Profile';

function App() {
  return (
    <AuthProvider>
      {/* mdmahim shariar */}
      <Nav />
      <Routes>
        {/* Mostofa Reza */}

        {/* AKTARUZZAMAN RIDOY */}

        {/* AKTARUZZAMAN RIDOY */}

        {/* Alamin */}

        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<Registation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/videoRoute" element={<VideoChatRoute />} />
        {/* md mahim shariar  */}

        {/* Suresh Pal Pranta */}
        <Route path="/CovidPortal" element={<CovidPortal />} />
        <Route path="/FindDonors" element={<FindDonors />} />

        {/* Suresh Pal Pranta */}

        {/* Mostofa Reza */}

        {/* Mostofa Reza */}

        {/* AKTARUZZAMAN RIDOY */}

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

        <Route path="/doctors" element={<Doctors />} />

        {/* Mahadi */}
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
