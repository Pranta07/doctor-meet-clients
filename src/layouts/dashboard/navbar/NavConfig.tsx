// components
import SvgIconStyle from "../../../components/SvgIconStyle";

// ----------------------------------------------------------------------

const getIcon = (name: any) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: getIcon("ic_user"),
  ecommerce: getIcon("ic_ecommerce"),
  analytics: getIcon("ic_analytics"),
  dashboard: getIcon("ic_dashboard"),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    items: [
      { title: "Home", path: "/dashboard/home", icon: ICONS.dashboard },
      { title: "Doctors", path: "/dashboard/two", icon: ICONS.ecommerce },
      { title: "Pharmacy", path: "/dashboard/three", icon: ICONS.analytics },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  // {
  //   items: [
  //     {
  //       title: "user",
  //       path: "/dashboard/user",
  //       icon: ICONS.user,
  //       children: [
  //         { title: "Four", path: "/dashboard/user/four" },
  //         { title: "Five", path: "/dashboard/user/five" },
  //         { title: "Six", path: "/dashboard/user/six" },
  //       ],
  //     },
  //   ],
  // },
];

export default sidebarConfig;
