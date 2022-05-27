import SvgIconStyle from "../../../components/SvgIconStyle";

const getIcon = (name: any) => (
    <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
    user: getIcon("ic_user"),
    analytics: getIcon("ic_analytics"),
    dashboard: getIcon("ic_dashboard"),
};

const sidebarConfig = [
    // Pharmacy
    {
        items: [
            { title: "Home", path: "/dashboard/home", icon: ICONS.dashboard },
        ],
    },

    // Users
    {
        items: [
            {
                title: "user",
                path: "/dashboard/user",
                icon: ICONS.user,
                children: [
                    {
                        title: "Favorite Doctors",
                        path: "/dashboard/user/favorite-doctors",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Appointments",
                        path: "/dashboard/user/my-appointments",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Preview Reports",
                        path: "/dashboard/user/report-pdf",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Report Status",
                        path: "/dashboard/user/Report-status",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Diagnosis",
                        path: "/dashboard/user/my-diagnosises",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Add Review",
                        path: "/dashboard/user/add-review",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Join Us",
                        path: "/dashboard/user/join-us",
                        icon: ICONS.analytics,
                    },
                ],
            },
        ],
    },

    // Doctors
    {
        items: [
            {
                title: "Doctor",
                path: "/dashboard/doctor",
                icon: ICONS.user,
                children: [
                    {
                        title: "Review Reports",
                        path: "/dashboard/doctor/reports",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Preview Reports",
                        path: "/dashboard/doctor/report-pdf",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Add Article",
                        path: "/dashboard/doctor/add-article",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "My Schedule",
                        path: "/dashboard/doctor/my-schedule-doctor",
                        icon: ICONS.analytics,
                    },
                ],
            },
        ],
    },

    // Moderators
    {
        items: [
            {
                title: "Moderator",
                path: "/dashboard/moderator",
                icon: ICONS.user,
                children: [
                    {
                        title: "Post Report",
                        path: "/dashboard/moderator/Report-section",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Report Status",
                        path: "/dashboard/moderator/Report-status",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Reports Preview",
                        path: "/dashboard/moderator/report-pdf",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Appointments",
                        path: "/dashboard/moderator/all-appointments",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Diagnosis",
                        path: "/dashboard/moderator/all-diagnosis",
                        icon: ICONS.analytics,
                    },
                ],
            },
        ],
    },

    // Admin
    {
        items: [
            {
                title: "admin",
                path: "/dashboard/admin",
                icon: ICONS.user,
                children: [
                    {
                        title: "Doctors",
                        path: "/dashboard/admin/manage-doctors",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Donors",
                        path: "/dashboard/admin/manage-donors",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Appointments",
                        path: "/dashboard/admin/all-appointments",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Diagnosis",
                        path: "/dashboard/admin/all-diagnosis",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Invoices",
                        path: "/dashboard/admin/all-invoices",
                    },
                    {
                        title: "Notify",
                        path: "/dashboard/admin/notify",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Make Moderator",
                        path: "/dashboard/admin/makeModerator",
                        icon: ICONS.analytics,
                    },
                    {
                        title: "Add Order",
                        path: "/dashboard/admin/add-order",
                        icon: ICONS.analytics,
                    },
                ],
            },
        ],
    },
];

export default sidebarConfig;
