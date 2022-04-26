import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Doctors from "./pages/doctors/Doctors";
import Footer from "./components/footer/Footer";

import Login from "./pages/security/login/Login";
import Registration from "./pages/security/registration/Registration";
import VideoChatRoute from "./pages/video-chat-client/VideoChatRoute";
import AuthProvider from "./contexts/AuthProvider";
import ContactUs from "./pages/contact-us/ContactUs";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {
  AppointmentDoctors,
  GetAppointmentForm,
  PayAppointmentFee,
} from "./components/appointment/index";
import Router from "./routes/index";
// theme
import ThemeProvider from "./theme/index";
import { ContextProvider } from "./contexts/Context";
// components
import ScrollToTop from "./components/ScrollToTop";
import ThemeColorPresets from "./components/ThemeColorPresets";

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      {/* <ThemeColorPresets> */}
      {/* <RtlLayout> */}

      {/* <Settings /> */}
      <AuthProvider>
        <ScrollToTop />
        <Router />
      </AuthProvider>

      {/* </RtlLayout> */}
      {/* </ThemeColorPresets> */}
    </ThemeProvider>
  );
}
