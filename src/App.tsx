// import "bootstrap/dist/css/bootstrap.min.css";
// import { Route, Routes } from "react-router-dom";
// import Doctors from "./pages/doctors/Doctors";
// import Footer from "./components/footer/Footer";
// import Nav from "./components/nav/Nav";
// import {
//   PremiumMemberships,
//   PremiumPayment,
// } from "./components/premium-membership/index";
// import {
//   PharmacyProductView,
//   PharmacyHome,
//   PharmacyCart,
//   PharmacyAllProduct,
// } from "./pages/pharmacy/index";
// import Login from "./pages/security/login/Login";
// import Registration from "./pages/security/registration/Registration";
// import {
//   AllDoctors,
//   FavoriteDoctors,
// } from "./pages/dashboards/user-dashboard/index";
// import VideoChatRoute from "./components/video-chat-client/VideoChatRoute";
// import AuthProvider from "./contexts/AuthProvider";
// import ContactUs from "./pages/contact-us/ContactUs";
// import CovidPortal from "./pages/covid-portal/CovidPortal";
// import Admin from "./pages/dashboards/admin-dashboard/AdminDashboard";
// import Dashboard from "./pages/dashboards/dashboard/Dashboard";
// import DashboardHome from "./pages/dashboards/dashboard-home/DashboardHome";
// import FindDonors from "./pages/find-donors/FindDonors";
// import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";
// import {
//   AppointmentDoctors,
//   GetAppointmentForm,
//   PayAppointmentFee,
// } from "./components/appointment/index";
// import MyAppointments from "./pages/dashboards/user-dashboard/MyAppointments";
// function App() {
//   return (
//     <>
//       <AuthProvider>
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/home" element={<Home />}></Route>
//           <Route path="/sign-up" element={<Registration />}></Route>
//           <Route path="/login" element={<Login />}></Route>
//           <Route path="/contact-us" element={<ContactUs />}></Route>
//           <Route path="/profile" element={<Profile />}></Route>
//           <Route path="/pharmacy" element={<PharmacyHome />}></Route>
//           <Route path="/medicine/:id" element={<PharmacyProductView />} />
//           <Route path="/video-route" element={<VideoChatRoute />}></Route>

//           <Route path="/covid-portal" element={<CovidPortal />}></Route>
//           <Route path="/find-donors" element={<FindDonors />}></Route>

//           <Route path="/cart" element={<PharmacyCart />} />
//           <Route path="/shop" element={<PharmacyAllProduct />} />

//           <Route path="/dashboard" element={<Dashboard />}>
//             <Route path="dashboard-home" element={<DashboardHome />} />
//             <Route path="doctors" element={<AllDoctors />} />
//             <Route path="favorite-doctor" element={<FavoriteDoctors />} />
//             <Route path="admin" element={<Admin />} />
//           </Route>
//           <Route path="/doctors" element={<Doctors />} />
//           <Route
//             path="/premium-membership"
//             element={<PremiumMemberships />}
//           ></Route>
//           <Route
//             path="/premium-payment/:id"
//             element={<PremiumPayment />}
//           ></Route>
//           <Route path="/appointment-doctors" element={<AppointmentDoctors />} />
//           <Route
//             path="/get-appointment-form/:id"
//             element={<GetAppointmentForm />}
//           ></Route>
//           <Route
//             path="/pay-appointment-fee/:id"
//             element={<PayAppointmentFee />}
//           ></Route>
//         </Routes>
//         <Footer></Footer>
//       </AuthProvider>
//     </>
//   );
// }

// export default App;
// routes
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Doctors from "./pages/doctors/Doctors";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import {
  PremiumMemberships,
  PremiumPayment,
} from "./components/premium-membership/index";

import Login from "./pages/security/login/Login";
import Registration from "./pages/security/registration/Registration";
import {
  AllDoctors,
  FavoriteDoctors,
} from "./pages/dashboards/user-dashboard/index";
import VideoChatRoute from "./components/video-chat-client/VideoChatRoute";
import AuthProvider from "./contexts/AuthProvider";
import ContactUs from "./pages/contact-us/ContactUs";
import CovidPortal from "./pages/covid-portal/CovidPortal";
import Admin from "./pages/dashboards/admin-dashboard/AdminDashboard";
import Dashboard from "./pages/dashboards/dashboard/Dashboard";
import DashboardHome from "./pages/dashboards/dashboard-home/DashboardHome";
import FindDonors from "./pages/find-donors/FindDonors";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import {
  AppointmentDoctors,
  GetAppointmentForm,
  PayAppointmentFee,
} from "./components/appointment/index";
import MyAppointments from "./pages/dashboards/user-dashboard/MyAppointments";
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
