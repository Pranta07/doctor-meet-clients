import React from "react";
import { ArrowForwardTwoTone } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));
const NotFound = () => {
  return (
    <RootStyle>
      {" "}
      <Box
        sx={{
          textAlign: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ m: 5 }}>
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            sx={{
              mt: 6,
              fontWeight: "bold",
              fontFamily: "Monospace",
            }}
          >
            404
          </Typography>
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontFamily: "Monospace",
            }}
          >
            Oops! That page can't be found.
          </Typography>

          <Box sx={{ typography: "body2", fontFamily: "Monospace" }}>
            We're really sorry but we can't seem to find the page you were
            looking for.
          </Box>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardTwoTone />}
              sx={{
                my: 5,
                px: 5,
                py: 1,
                backgroundColor: "black",
                color: "white",
                fontFamily: "Monospace",
              }}
            >
              BACK TO HOMEPAGE
            </Button>
          </Link>
        </Box>
      </Box>
    </RootStyle>
  );
};

export default NotFound;
