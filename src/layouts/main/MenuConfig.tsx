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
    icon: <Iconify icon={"fa6-solid:user-doctor"} {...ICON_SIZE} />,
    path: "/doctors",
  },

  {
    title: "More Services",
    path: "/pages",
    icon: <Iconify icon={"fluent:more-circle-20-filled"} {...ICON_SIZE} />,
    children: [
      {
        items: [
          {
            title: "Covid Portal",
            icon: <Iconify icon={"fa6-solid:virus-covid"} {...ICON_SIZE} />,
            path: PATH_PAGE.about,
          },
          {
            title: "Blood Donors",
            icon: <Iconify icon={"fontisto:blood-drop"} {...ICON_SIZE} />,
            path: PATH_PAGE.contact,
          },
          {
            title: "Pharmacy",
            icon: <Iconify icon={"healthicons:medicines"} {...ICON_SIZE} />,
            path: PATH_PAGE.doctors,
          },
          {
            title: "Premium Membership",
            icon: (
              <Iconify
                icon={"fluent:premium-person-20-filled"}
                {...ICON_SIZE}
              />
            ),
            path: PATH_PAGE.pricing,
          },
        ],
      },
    ],
  },
  {
    title: "Testimonials",
    icon: <Iconify icon={"ic:baseline-reviews"} {...ICON_SIZE} />,
    path: "/testimonials",
  },
  {
    title: "Contact Us",
    icon: <Iconify icon={"fluent:contact-card-20-filled"} {...ICON_SIZE} />,
    path: "/contact-us",
  },
  {
    title: "About us",
    icon: <Iconify icon={"medical-icon:i-information-us"} {...ICON_SIZE} />,
    path: "/about-us",
  },
];

export default menuConfig;
