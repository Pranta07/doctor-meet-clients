import { Suspense, lazy } from "react";
// import { HashLink } from "react-router-hash-link";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import DashboardLayout from "../layouts/dashboard/index";
// components
import LoadingScreen from "../components/LoadingScreen";
import MainLayout from "../layouts/main/index";

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
import ReportPdf from "../components/report-review-section/report-pdf/ReportPdf";
import AllReports from "../components/all-reports/AllReports";

// ----------------------------------------------------------------------

const Loadable = (Component: any) => (props: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { pathname } = useLocation();

    return (
        <Suspense
            fallback={
                <LoadingScreen isDashboard={pathname.includes("/dashboard")} />
            }
        >
            <Component {...props} />
        </Suspense>
    );
};

export default function Router() {
    return useRoutes([
        {
            path: "auth",
            children: [
                {
                    path: "login",
                    element: (
                        // <GuestGuard>
                        <Login />
                        // </GuestGuard>
                    ),
                },
                {
                    path: "register",
                    element: (
                        // <GuestGuard>
                        <Register />
                        // </GuestGuard>
                    ),
                },
                { path: "login-unprotected", element: <Login /> },
                { path: "register-unprotected", element: <Register /> },
                { path: "reset-password", element: <ResetPassword /> },
                { path: "verify", element: <VerifyCode /> },
            ],
        },
        // // Dashboard Routes
        // {
        //   path: 'dashboard',
        //   element: (
        //     // <AuthGuard>
        //       <DashboardLayout />
        //     // </AuthGuard>
        //   ),
        //   children: [
        //     { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        //     { path: 'app', element: <GeneralApp /> },
        //     { path: 'ecommerce', element: <GeneralEcommerce /> },
        //     { path: 'analytics', element: <GeneralAnalytics /> },
        //     { path: 'banking', element: <GeneralBanking /> },
        //     { path: 'booking', element: <GeneralBooking /> },

        //     {
        //       path: 'e-commerce',
        //       children: [
        //         { element: <Navigate to="/dashboard/e-commerce/shop" replace />, index: true },
        //         { path: 'shop', element: <EcommerceShop /> },
        //         { path: 'product/:name', element: <EcommerceProductDetails /> },
        //         { path: 'list', element: <EcommerceProductList /> },
        //         { path: 'product/new', element: <EcommerceProductCreate /> },
        //         { path: 'product/:name/edit', element: <EcommerceProductCreate /> },
        //         { path: 'checkout', element: <EcommerceCheckout /> },
        //       ],
        //     },
        //     {
        //       path: 'user',
        //       children: [
        //         { element: <Navigate to="/dashboard/user/profile" replace />, index: true },
        //         { path: 'profile', element: <UserProfile /> },
        //         { path: 'cards', element: <UserCards /> },
        //         { path: 'list', element: <UserList /> },
        //         { path: 'new', element: <UserCreate /> },
        //         { path: ':name/edit', element: <UserCreate /> },
        //         { path: 'account', element: <UserAccount /> },
        //       ],
        //     },
        //     {
        //       path: 'invoice',
        //       children: [
        //         { element: <Navigate to="/dashboard/invoice/list" replace />, index: true },
        //         { path: 'list', element: <InvoiceList /> },
        //         { path: ':id', element: <InvoiceDetails /> },
        //         { path: ':id/edit', element: <InvoiceEdit /> },
        //         { path: 'new', element: <InvoiceCreate /> },
        //       ],
        //     },
        //     {
        //       path: 'blog',
        //       children: [
        //         { element: <Navigate to="/dashboard/blog/posts" replace />, index: true },
        //         { path: 'posts', element: <BlogPosts /> },
        //         { path: 'post/:title', element: <BlogPost /> },
        //         { path: 'new', element: <BlogNewPost /> },
        //       ],
        //     },
        //     {
        //       path: 'mail',
        //       children: [
        //         { element: <Navigate to="/dashboard/mail/all" replace />, index: true },
        //         { path: 'label/:customLabel', element: <Mail /> },
        //         { path: 'label/:customLabel/:mailId', element: <Mail /> },
        //         { path: ':systemLabel', element: <Mail /> },
        //         { path: ':systemLabel/:mailId', element: <Mail /> },
        //       ],
        //     },
        //     {
        //       path: 'chat',
        //       children: [
        //         { element: <Chat />, index: true },
        //         { path: 'new', element: <Chat /> },
        //         { path: ':conversationKey', element: <Chat /> },
        //       ],
        //     },
        //     { path: 'calendar', element: <Calendar /> },
        //     { path: 'kanban', element: <Kanban /> },
        //   ],
        // },

        {
            path: "/dashboard",
            element: <DashboardLayout />,
            children: [
                {
                    element: <Navigate to="/dashboard/home" replace />,
                    index: true,
                },
                { path: "home", element: <DashboardHome /> },

                // user
                {
                    path: "user",
                    children: [
                        {
                            element: (
                                <Navigate
                                    to="/dashboard/user/doctors"
                                    replace
                                />
                            ),
                            index: true,
                        },
                        { path: "doctors", element: <AllDoctors /> },
                        {
                            path: "favorite-doctors",
                            element: <FavoriteDoctors />,
                        },
                        {
                            path: "my-appointments",
                            element: <MyAppointments />,
                        },
                        {
                            path: "get-appointments",
                            element: <GetAppointmentForm />,
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
                            element: (
                                <Navigate
                                    to="/dashboard/admin/doctors"
                                    replace
                                />
                            ),
                            index: true,
                        },
                        { path: "manage-doctors", element: <ManageDoctors /> },
                        { path: "manage-donors", element: <ManageDonors /> },
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
                    ],
                },
            ],
        },

        // Main Routes
        {
            path: "*",
            element: <NotFound />,
            // children: [
            //   { path: "coming-soon", element: <ComingSoon /> },
            //   { path: "maintenance", element: <Maintenance /> },
            //   { path: "pricing", element: <Pricing /> },
            //   { path: "payment", element: <Payment /> },
            //   { path: "500", element: <Page500 /> },
            //   { path: "*", element: <NotFound /> },
            //   // { path: "*", element: <Navigate to="/404" replace /> },
            // ],
        },
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { element: <HomePage />, index: true },
                { path: "about-us", element: <About /> },
                { path: "doctors", element: <AllDoctors /> },
                { path: "contact-us", element: <ContactUs /> },
                { path: "pharmacy", element: <PharmacyHome /> },
                { path: "covid-portal", element: <CovidPortal /> },
                { path: "find-donors", element: <FindDonors /> },
                { path: "premium-membership", element: <PremiumMemberships /> },
                { path: "virtual-meet", element: <VideoApp /> },
                { path: "login", element: <Login /> },
                { path: "profile", element: <Profile /> },
                { path: "sign-up", element: <Registration /> },
                { path: "medicine/:id", element: <PharmacyProductView /> },
                { path: "cart", element: <PharmacyCart /> },
                { path: "shop", element: <PharmacyAllProduct /> },
                { path: "premium-payment/:id", element: <PremiumPayment /> },
                { path: "premium-payment/:id", element: <PremiumPayment /> },
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
                    path: "/diagnostic-pay/:id",
                    element: <DiagnosisPay />,
                },
                {
                    path: "article/:id",
                    element: <ViewArticale />,
                },
            ],
        },
        // { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}

// Dashboard

const PharmacyHome = Loadable(
    lazy(() => import("../pages/pharmacy-home/PharmacyHome"))
);
//const PharmacyHome = Loadable(
// lazy(() => import("../pages/pharmacy/PharmacyH~ome")));

// const NotFound = Loadable(lazy(() => import('../pages/Page404')));
// AUTHENTICATION
const Login = Loadable(lazy(() => import("../pages/security/login/Login")));
const Register = Loadable(lazy(() => import("../pages/auth/Register")));
const ResetPassword = Loadable(
    lazy(() => import("../pages/auth/ResetPassword"))
);
const VerifyCode = Loadable(lazy(() => import("../pages/auth/VerifyCode")));
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
        () =>
            import("../components/manage-doctors/manage-doctors/ManageDoctors")
    )
);
const ManageDonors = Loadable(
    lazy(() => import("../components/manage-donors/manage-donors/ManageDonors"))
);
const MyAppointments = Loadable(
    lazy(() => import("../components/appointment/MyAppointments"))
);
const GetAppointmentForm = Loadable(
    lazy(() => import("../components/appointment/GetAppointmentForm"))
);
const AllAppointments = Loadable(
    lazy(() => import("../pages/dashboards/all-appointments/AllAppointments"))
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
const Doctors = Loadable(lazy(() => import("../pages/doctors/Doctors")));
const NotFound = Loadable(
    lazy(() => import("../components/not-found/NotFound"))
);
const VideoChatRoute = Loadable(
    lazy(() => import("../pages/video-chat-client/VideoChatRoute"))
);
const Profile = Loadable(lazy(() => import("../pages/profile/Profile")));

const Registration = Loadable(
    lazy(() => import("../pages/security/registration/Registration"))
);
const PharmacyProductView = Loadable(
    lazy(
        () =>
            import(
                "../components/pharmacy/pharmacy-product-view/PharmacyProductView"
            )
    )
);
const PharmacyCart = Loadable(
    lazy(() => import("../components/pharmacy/pharmacy-cart/PharmacyCart"))
);
const PharmacyAllProduct = Loadable(
    lazy(
        () =>
            import(
                "../components/pharmacy/pharmacy-all-product/PharmacyAllProduct"
            )
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
    lazy(
        () => import("../components/diagnostic-center/my-diagnoses/MyDiagnoses")
    )
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

// DASHBOARD

// GENERAL
// const GeneralApp = Loadable(lazy(() => import('../pages/dashboard/GeneralApp')));
// const GeneralEcommerce = Loadable(lazy(() => import('../pages/dashboard/GeneralEcommerce')));
// const GeneralAnalytics = Loadable(lazy(() => import('../pages/dashboard/GeneralAnalytics')));
// const GeneralBanking = Loadable(lazy(() => import('../pages/dashboard/GeneralBanking')));
// const GeneralBooking = Loadable(lazy(() => import('../pages/dashboard/GeneralBooking')));

// // ECOMMERCE
// const EcommerceShop = Loadable(lazy(() => import('../pages/dashboard/EcommerceShop')));
// const EcommerceProductDetails = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductDetails')));
// const EcommerceProductList = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductList')));
// const EcommerceProductCreate = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductCreate')));
// const EcommerceCheckout = Loadable(lazy(() => import('../pages/dashboard/EcommerceCheckout')));

// // INVOICE
// const InvoiceList = Loadable(lazy(() => import('../pages/dashboard/InvoiceList')));
// const InvoiceDetails = Loadable(lazy(() => import('../pages/dashboard/InvoiceDetails')));
// const InvoiceCreate = Loadable(lazy(() => import('../pages/dashboard/InvoiceCreate')));
// const InvoiceEdit = Loadable(lazy(() => import('../pages/dashboard/InvoiceEdit')));

// // BLOG
// const BlogPosts = Loadable(lazy(() => import('../pages/dashboard/BlogPosts')));
// const BlogPost = Loadable(lazy(() => import('../pages/dashboard/BlogPost')));
// const BlogNewPost = Loadable(lazy(() => import('../pages/dashboard/BlogNewPost')));

// // USER
// const UserProfile = Loadable(lazy(() => import('../pages/dashboard/UserProfile')));
// const UserCards = Loadable(lazy(() => import('../pages/dashboard/UserCards')));
// const UserList = Loadable(lazy(() => import('../pages/dashboard/UserList')));
// const UserAccount = Loadable(lazy(() => import('../pages/dashboard/UserAccount')));
// const UserCreate = Loadable(lazy(() => import('../pages/dashboard/UserCreate')));

// // APP
// const Chat = Loadable(lazy(() => import('../pages/dashboard/Chat')));
// const Mail = Loadable(lazy(() => import('../pages/dashboard/Mail')));
// const Calendar = Loadable(lazy(() => import('../pages/dashboard/Calendar')));
// const Kanban = Loadable(lazy(() => import('../pages/dashboard/Kanban')));

// MAIN
const HomePage = Loadable(lazy(() => import("../pages/home/Home")));
const ContactUs = Loadable(
    lazy(() => import("../components/contact-us/ContactUs"))
);
const Faqs = Loadable(lazy(() => import("../pages/Faqs")));
const ComingSoon = Loadable(lazy(() => import("../pages/ComingSoon")));
const Maintenance = Loadable(lazy(() => import("../pages/Maintenance")));

const Page500 = Loadable(lazy(() => import("../pages/Page500")));
const About = Loadable(lazy(() => import("../pages/about/About")));
