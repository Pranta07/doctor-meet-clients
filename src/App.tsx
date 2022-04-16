import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Doctors from "./components/Doctors/Doctors";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import PremiumMembership from "./components/PremiumMembership/PremiumMembership";
import PremiumMemberships from "./components/PremiumMembership/PremiumMemberships";
import PremiumPayment from "./components/PremiumMembership/PremiumPayment";
import Pharmecy_product_view from "./components/Pharmecy/Phamecy_product_view/Pharmecy_product_view";
import PharmecyHome from "./components/Pharmecy/PharmecyHome/PharmecyHome";
import Login from "./components/security/Login/Login";
import Registation from "./components/security/Registation/Registation";
import AllDoctors from "./components/UserDashboard/AllDoctors/AllDoctors";
import FavoriteDoctors from "./components/UserDashboard/FavoriteDoctors/FavoriteDoctors";
import VideoChatRoute from "./components/VideoChatClient/VideoChatRoute";
import AuthProvider from "./context/AuthProvider";
import ContactUs from "./page/ContactUs/ContactUs";
import CovidPortal from "./page/CovidPortal/CovidPortal";
import Admin from "./page/Dashboards/Admin/Admin";
import Dashboard from "./page/Dashboards/Dashboard/Dashboard";
import DashboardHome from "./page/Dashboards/DashboardHome/DashboardHome";
import FindDonors from "./page/FindDonors/FindDonors";
import Home from "./page/Home/Home";
import Profile from "./page/Profile/Profile";
import "./App.css";

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
          <Route path="/premiumMembership" element={<PremiumMemberships />}>
          </Route>
          <Route path="/premiumPayment/:id" element={<PremiumPayment />}></Route>

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="dashboarHome" element={<DashboardHome />} />
            <Route path="doctors" element={<AllDoctors />} />
            <Route path="favdoc" element={<FavoriteDoctors />} />
            <Route path="admin" element={<Admin />} />
          </Route>

        <Route path="/doctors" element={<Doctors />} />

        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </>
  );
    
}

export default App;
