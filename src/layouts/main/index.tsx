import { useLocation, Outlet } from "react-router-dom";
// @mui
import { Box, Container, Typography, Stack } from "@mui/material";
// components
import Logo from "../../components/Logo";
//
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import Footer from "../../components/footer/Footer";

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />

      <Outlet />

      <Box sx={{ flexGrow: 1 }} />

      {!isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
            bgcolor: "background.default",
          }}
        >
          <Footer />
        </Box>
      )}
    </Stack>
  );
}
