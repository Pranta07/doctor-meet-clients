// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE } from "../../routes/paths";
// components
// components
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "Home",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: "/",
  },
  {
    title: "Find Doctors",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: "/doctors",
  },

  {
    title: "More Services",
    path: "/pages",
    icon: <Iconify icon={"eva:file-fill"} {...ICON_SIZE} />,
    children: [
      {
        items: [
          { title: "Covid Portal", path: PATH_PAGE.about },
          { title: "Blood Donors", path: PATH_PAGE.contact },
          { title: "Pharmacy", path: PATH_PAGE.doctors },
          { title: "Premium Membership", path: PATH_PAGE.pricing },
        ],
      },
    ],
  },
  {
    title: "Testimonials",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: "/testimonials",
  },
  {
    title: "Contact Us",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: "/contact-us",
  },
  {
    title: "About us",
    icon: <Iconify icon={"eva:home-fill"} {...ICON_SIZE} />,
    path: "/about-us",
  },
];

export default menuConfig;
