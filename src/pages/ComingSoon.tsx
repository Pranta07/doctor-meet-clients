// @mui
import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
// hooks

// components
import Page from "../components/Page.tsx";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const CountdownStyle = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const SeparatorStyle = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  [theme.breakpoints.up("sm")]: {
    margin: theme.spacing(0, 2.5),
  },
}));

// ----------------------------------------------------------------------

export default function ComingSoon() {
  return (
    <Page title="Coming Soon" sx={{ height: 1 }}>
      <RootStyle>
        <Container>
          <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
            <Typography variant="h3" paragraph>
              Coming Soon!
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              We are currently working hard on this page!
            </Typography>

            <CountdownStyle>
              <div>
                <Typography sx={{ color: "text.secondary" }}>Days</Typography>
              </div>

              <SeparatorStyle variant="h2">:</SeparatorStyle>

              <SeparatorStyle variant="h2">:</SeparatorStyle>

              <SeparatorStyle variant="h2">:</SeparatorStyle>
            </CountdownStyle>

            {/* <InputStyle
              fullWidth
              placeholder="Enter your email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button variant="contained" size="large">
                      Notify Me
                    </Button>
                  </InputAdornment>
                ),
              }}
              sx={{ my: 5, '& .MuiOutlinedInput-root': { pr: 0.5 } }}
            /> */}
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}
