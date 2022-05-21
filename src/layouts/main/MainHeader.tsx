import { useLocation, NavLink } from "react-router-dom";
// @mui
import { styled, useTheme } from "@mui/material/styles";
import { Box, Button, AppBar, Toolbar, Container, Avatar } from "@mui/material";
// hooks
import useOffSetTop from "../../hooks/useOffSetTop";
import useResponsive from "../../hooks/useResponsive";
// utils
import cssStyles from "../../utils/cssStyles";
// config
import { HEADER } from "../../config";
// components
import logo from "../../assets/img/logo.png";
//
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import navConfig from "./MenuConfig";
import ModePopOver from "../dashboard/header/ModePopOver";
// import login from "../../pages/security/login/Login";
import * as React from "react";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import useAuth from "../../hooks/useAuth";
import AccountPopover from "../dashboard/header/AccountPopover";
import Logo from "../../components/Logo";
import { useAppSelector } from "../../redux/store";

// ----------------------------------------------------------------------

function HideOnScroll(props: any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled("div")(({ theme }: any) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: "auto",
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainHeader(props: any) {
  const { user }:any = useAppSelector((state) => state.user);
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);

  const theme = useTheme();

  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "md");

  const isHome = pathname === "/";

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar sx={{ boxShadow: 0, bgcolor: "transparent" }}>
          <ToolbarStyle
            disableGutters
            sx={{
              ...(isOffset && {
                ...cssStyles(theme).bgBlur(props),
                height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
              }),
            }}
          >
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Logo />

              <Box sx={{ flexGrow: 1 }} />

              {isDesktop && (
                <MenuDesktop
                  isOffset={isOffset}
                  isHome={isHome}
                  navConfig={navConfig}
                />
              )}

              {user?.email ? (
                // <div className="dropdown ms-auto">
                //   <Avatar
                //     src={user.photoURL || ""}
                //     alt="user-img"
                //     sx={{
                //       backgroundColor: "skyblue",
                //     }}
                //   />
                //   <div className="dropdown-content">
                //     <p>
                //       <NavLink to="/profile">Profile</NavLink>
                //     </p>
                //     <p>
                //       <NavLink to="/dashboard/home">Dashboard</NavLink>
                //     </p>
                //     <p onClick={logOut}>
                //       <NavLink to="/">Sign Out </NavLink>
                //     </p>
                //   </div>
                // </div>
                <AccountPopover />
              ) : (
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      <Button variant="contained">Login</Button>
                    </NavLink>
                  </li>
                </ul>
              )}

              <ModePopOver />
              {!isDesktop && (
                <MenuMobile
                  isOffset={isOffset}
                  isHome={isHome}
                  navConfig={navConfig}
                />
              )}
            </Container>
          </ToolbarStyle>

          {isOffset && <ToolbarShadowStyle />}
        </AppBar>
      </HideOnScroll>
    </>
  );
}

// export default function HideAppBar(props: Props) {
//   return (
//     <>
//       <HideOnScroll {...props}>
//         <AppBar>
//           <Toolbar>
//             <Typography variant="h6" component="div">
//               Scroll to hide App bar
//             </Typography>
//           </Toolbar>
//         </AppBar>
//       </HideOnScroll>
//     </>
//   );
// }
