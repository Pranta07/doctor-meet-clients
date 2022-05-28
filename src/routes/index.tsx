import { Suspense, lazy } from "react";
// import { HashLink } from "react-router-hash-link";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import DashboardLayout from "../layouts/dashboard/index";
// components
import LoadingScreen from "../components/LoadingScreen";
import MainLayout from "../layouts/main/index";
// import ForgotPassword from "../pages/security/forgotPassword/ForgotPassword";
// import ResetPassword from "../pages/security/resetPassword/ResetPassword";
import {
  DiagnosisPay,
  DiagnosticAppointmentForm,
} from "../components/diagnostic-center";

import UserReview from "../components/user-review/UserReview";
import { DiagnosticCenter } from "../components/diagnostic-center";
import ControlDoctors from "../components/admin-database/ControlDoctors";
import EditSingleDoctor from "../components/admin-database/EditSingleDoctor";
import AddArticle from "../components/add-article/AddArticle";
import VideoApp from "../pages/virtual-meet/VideoApp";

import AllInvoices from "../pages/dashboards/invoices/AllInvoices";

import PharmacyPay from "../components/pharmacy/PharmacyPay";
import PrivateRoute from "./private-route/PrivateRoute";
import DoctorsRoute from "./doctor-route/DoctorsRoute";
import ModeratorRoute from "./modaretor-route/ModeratorRoute";
import AdminRoute from "./admin-route/AdminRoute";
import DoctorAppointments from "../components/all-appointments-doctor/DoctorAppointments";
import ReportPdf from "../components/report-review-section/report-pdf/ReportPdf";
import Profile from "../pages/profile/Profile";
import UserAppointments from "../components/all-appointments-user/UserAppointments";
import AllReportStatus from "../components/report-review-section/report-status-section/AllReportStatus";
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";

// ----------------------------------------------------------------------

const Loadable = (Component: any) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense
      fallback={<LoadingScreen isDashboard={pathname.includes("/dashboard")} />}
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "*",
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: "register",
          element: (
            <GuestGuard>
              <Registration />
            </GuestGuard>
          ),
        },
      ],
    },

    {
      path: "dashboard",
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),

      children: [
        {
          element: <Navigate to="/dashboard/home" replace />,
          index: true,
        },
        {
          path: "home",
          element: <DashboardHome />,
        },

        // user
        {
          path: "user",
          children: [
            {
              element: <Navigate to="/dashboard/user/doctors" replace />,
              index: true,
            },
            {
              path: "favorite-doctors",
              element: <FavoriteDoctors />,
            },
            {
              path: "my-appointments",
              element: <UserAppointments />,
            },
            {
              path: "my-diagnosises",
              element: <MyDiagnosises />,
            },
            {
              path: "Report-status",
              element: <ReportStatus />,
            },
            {
              path: "report-pdf",
              element: <ReportPdf />,
            },
            {
              path: "add-review",
              element: <UserReview />,
            },
            {
              path: "join-us",
              element: <AddDoctor />,
            },
          ],
        },

        // doctor
        {
          path: "doctor",
          children: [
            {
              path: "report-pdf",
              element: <ReportPdf />,
            },
            {
              path: "reports",
              element: <AllReports />,
            },
            {
              path: "add-article",
              element: <AddArticle />,
            },
            {
              path: "my-schedule-doctor",
              element: <DoctorAppointments />,
            },
          ],
        },

        // moderator
        {
          path: "moderator",
          children: [
            {
              path: "Report-section",
              element: <ReportSection />,
            },
            {
              path: "Report-status",
              element: <ReportStatus />,
            },
            {
              path: "report-pdf",
              element: <ReportPdf />,
            },
            {
              path: "all-appointments",
              element: <AllAppointments />,
            },
            {
              path: "all-diagnosis",
              element: <AllDiagnosis />,
            },
          ],
        },

        // admin
        {
          path: "admin",
          children: [
            {
              element: <Navigate to="/dashboard/admin/doctors" replace />,
              index: true,
            },
            {
              path: "manage-doctors",
              element: <ManageDoctors />,
            },
            {
              path: "manage-donors",
              element: <ManageDonors />,
            },
            {
              path: "all-appointments",
              element: <AllAppointments />,
            },
            {
              path: "all-diagnosis",
              element: <AllDiagnosis />,
            },
            {
              path: "edit-doctors",
              element: <ControlDoctors />,
            },
            {
              path: "edit-doctors/edit-single-doctor/:id",
              element: <EditSingleDoctor />,
            },
            {
              path: "/dashboard/admin/notify",
              element: <Notify />,
            },
            {
              path: "/dashboard/admin/make-moderator",
              element: <MakeModaretor />,
            },
            {
              path: "all-invoices",
              element: <AllInvoices />,
            },
            {
              path: "add-order",
              element: <AddOrder />,
            },
          ],
        },
      ],
    },

    // Main Routes
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: "about-us", element: <About /> },
        {
          path: "doctors",
          element: <AllDoctors />,
        },
        { path: "contact-us", element: <ContactUs /> },
        {
          path: "pharmacy",
          element: <PharmacyHome />,
        },
        { path: "covid-portal", element: <CovidPortal /> },
        { path: "find-donors", element: <FindDonors /> },
        { path: "premium-membership", element: <PremiumMemberships /> },
        {
          path: "virtual-meet/:id",
          element: <VideoApp />,
        },
        { path: "login", element: <Login /> },

        { path: "signUp", element: <Registration /> },
        {
          path: "medicine/:id",
          element: <PharmacyProductView />,
        },
        {
          path: "cart",
          element: <PharmacyCart />,
        },
        { path: "shop", element: <PharmacyAllProduct /> },
        {
          path: "premium-payment/:id",
          element: <PremiumPayment />,
        },
        {
          path: "appointment-doctors",
          element: <AppointmentDoctors />,
        },
        {
          path: "get-appointment-form/:id",
          element: <GetAppointmentForm />,
        },
        {
          path: "pay-appointment-fee/:id",
          element: <PayAppointmentFee />,
        },
        {
          path: "/diagnostic-center",
          element: <DiagnosticCenter />,
        },
        {
          path: "/diagnostic-appointment-form/:category/:id",
          element: <DiagnosticAppointmentForm />,
        },
        {
          path: "/diagnostic-pay/:id",
          element: <DiagnosisPay />,
        },
        {
          path: "article/:id",
          element: <ViewArticale />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "doctor/:id",
          element: <DoctorView />,
        },
        // { path: "pharmacy-payment/:id", element: <PharmacyPay /> },//It is dynamic route
        { path: "/pharmacy-payment", element: <PharmacyPay /> }, //It is static route
      ],
    },
    // { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// Dashboard

const PharmacyHome = Loadable(
  lazy(() => import("../pages/pharmacy-home/PharmacyHome"))
);

const Login = Loadable(lazy(() => import("../pages/security/login/Login")));
const CovidPortal = Loadable(
  lazy(() => import("../pages/covid-portal/CovidPortal"))
);
const DashboardHome = Loadable(
  lazy(() => import("../pages/dashboards/dashboard-home/DashboardHome"))
);
const AllDoctors = Loadable(
  lazy(() => import("../components/all-doctors/AllDoctors"))
);
const FavoriteDoctors = Loadable(
  lazy(() => import("../components/favorite-doctors/FavoriteDoctors"))
);
const ManageDoctors = Loadable(
  lazy(
    () => import("../components/manage-doctors/manage-doctors/ManageDoctors")
  )
);
const Notify = Loadable(lazy(() => import("../components/notify/Notify")));
const ManageDonors = Loadable(
  lazy(() => import("../components/manage-donors/manage-donors/ManageDonors"))
);

const MakeModaretor = Loadable(
  lazy(() => import("../pages/make-moderator/MakeModerator"))
);
const AllReports = Loadable(
  lazy(() => import("../components/all-reports/AllReports"))
);

const GetAppointmentForm = Loadable(
  lazy(() => import("../components/appointment/GetAppointmentForm"))
);
const AllAppointments = Loadable(
  lazy(() => import("../components/all-appointments/AllAppointments"))
);
const AllDiagnosis = Loadable(
  lazy(() => import("../pages/dashboards/all-diagnosis/AllDiagnosis"))
);
const FindDonors = Loadable(
  lazy(() => import("../pages/find-donors/FindDonors"))
);
const ReportSection = Loadable(
  lazy(() => import("../components/report-review-section/ReportSection"))
);
const PremiumMemberships = Loadable(
  lazy(() => import("../pages/premium-membership/PremiumMemberships"))
);
const NotFound = Loadable(
  lazy(() => import("../components/not-found/NotFound"))
);

const Registration = Loadable(
  lazy(() => import("../pages/security/registration/Registration"))
);
const PharmacyProductView = Loadable(
  lazy(
    () =>
      import("../components/pharmacy/pharmacy-product-view/PharmacyProductView")
  )
);
const PharmacyCart = Loadable(
  lazy(() => import("../components/pharmacy/pharmacy-cart/PharmacyCart"))
);
const PharmacyAllProduct = Loadable(
  lazy(
    () =>
      import("../components/pharmacy/pharmacy-all-product/PharmacyAllProduct")
  )
);
const PremiumPayment = Loadable(
  lazy(() => import("../pages/premium-membership/PremiumPayment"))
);
const AppointmentDoctors = Loadable(
  lazy(() => import("../components/appointment/AppointmentDoctors"))
);
const PayAppointmentFee = Loadable(
  lazy(() => import("../components/appointment/PayAppointmentFee"))
);
const MyDiagnosises = Loadable(
  lazy(() => import("../components/diagnostic-center/my-diagnoses/MyDiagnoses"))
);
const ReportStatus = Loadable(
  lazy(
    () =>
      import(
        "../components/report-review-section/report-status-section/ReportStatus"
      )
  )
);
const ViewArticale = Loadable(
  lazy(() => import("../components/articles/ViewArticle"))
);
const AddOrder = Loadable(
  lazy(() => import("../components/add-order/AddOrder"))
);

const HomePage = Loadable(lazy(() => import("../pages/home/Home")));
const ContactUs = Loadable(
  lazy(() => import("../components/contact-us/ContactUs"))
);
const DoctorView = Loadable(
  lazy(() => import("../components/all-doctors/DoctorView"))
);

const About = Loadable(lazy(() => import("../pages/about/About")));
const AddDoctor = Loadable(
  lazy(() => import("../components/add-doctor/AddDoctor"))
);
