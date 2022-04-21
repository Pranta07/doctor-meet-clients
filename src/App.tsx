import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Doctors from "./components/doctors/Doctors";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import PremiumMemberships from "./components/premium-membership/PremiumMemberships";
import PremiumPayment from "./components/premium-membership/PremiumPayment";
import Pharmecy_product_view from "./components/pharmacy/Phamecy_product_view/Pharmecy_product_view";
import PharmecyHome from "./components/pharmacy/PharmacyHome";
import Login from "./components/security/login/Login";
import Registation from "./components/security/registation/Registation";
import AllDoctors from "./components/user-dashboard/AllDoctors";
import FavoriteDoctors from "./components/user-dashboard/FavoriteDoctors";
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

import "./App.css";
import AppointmentDoctors from "./components/appointment/AppointmentDoctors/AppointmentDoctors";
import GetAppointmentForm from "./components/appointment/GetAppointmentForm/GetAppointmentForm";
import PayAppointmentFee from "./components/appointment/PayAppointmentFee";
import MyAppointments from "./components/user-dashboard/MyAppointments";
import Pharmecy_cart from "./components/pharmacy/Pharmecy_cart/Pharmecy_cart";
import Pharmecy_all_Product from "./components/pharmacy/Pharmecy_all_Product/Pharmecy_all_Product";

function App() {
  return (
    <>
      <AuthProvider>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signUp" element={<Registation />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/pharma" element={<PharmecyHome />}></Route>
          <Route path="/medicine/:id" element={<Pharmecy_product_view />} />
          <Route path="/videoRoute" element={<VideoChatRoute />}></Route>

          <Route path="/CovidPortal" element={<CovidPortal />}></Route>
          <Route path="/FindDonors" element={<FindDonors />}></Route>

          <Route path="/cart" element={<Pharmecy_cart />} />
          <Route path="/shop" element={<Pharmecy_all_Product />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="dashboarHome" element={<DashboardHome />} />
            <Route path="doctors" element={<AllDoctors />} />
            <Route path="favdoc" element={<FavoriteDoctors />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="/doctors" element={<Doctors />} />
          <Route
            path="/premiumMembership"
            element={<PremiumMemberships />}
          ></Route>
          <Route
            path="/premiumPayment/:id"
            element={<PremiumPayment />}
          ></Route>
          <Route path="/appointmentDoctors" element={<AppointmentDoctors />} />
          <Route
            path="/getAppointmentForm/:id"
            element={<GetAppointmentForm />}
          ></Route>
          <Route
            path="/payAppointmentFee/:id"
            element={<PayAppointmentFee />}
          ></Route>
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </>
  );
}

export default App;
