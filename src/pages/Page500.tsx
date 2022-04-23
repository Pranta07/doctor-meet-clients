import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
// @mui
import { Box, Button, Typography, Container } from "@mui/material";
// components
import Page from "../components/Page.tsx";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Page500() {
  return (
    <Page title="500 Internal Server Error" sx={{ height: 1 }}>
      <RootStyle>
        <Container>
          <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
            <Typography variant="h3" paragraph>
              500 Internal Server Error
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              There was an error, please try again later.
            </Typography>

            <Button
              to="/"
              size="large"
              variant="contained"
              component={RouterLink}
            >
              Go to Home
            </Button>
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}
