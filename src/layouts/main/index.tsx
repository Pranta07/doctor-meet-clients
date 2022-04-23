import { useLocation, Outlet } from "react-router-dom";
// @mui
import { Box, Container, Typography, Stack } from "@mui/material";
// components
import Logo from "../../components/Logo.tsx";
//
import MainFooter from "./MainFooter.tsx";
import MainHeader from "./MainHeader.tsx";

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
            py: 5,
            textAlign: "center",
            position: "relative",
            bgcolor: "background.default",
          }}
        >
          <Container>
            <Logo sx={{ mb: 1, mx: "auto" }} />

            <Typography variant="caption" component="p">
              © All rights reserved
            </Typography>
          </Container>
        </Box>
      )}
    </Stack>
  );
}
