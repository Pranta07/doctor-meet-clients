import { Container, Grid } from "@mui/material";
import React from "react";
import "./CovidAwarnessBar.css";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }: any) => ({
  backgroundColor: theme.palette.background.default,
}));
const CovidAwarnessBar = () => {
  return (
    <RootStyle className="covid-awareness-bar py-5 mb-5">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <div className="d-lg-flex d-md-flex justify-content-between align-items-center">
              <div className="awareness-logo-container d-flex justify-content-center align-items-center flex-column">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2949/2949973.png"
                  alt=""
                />
              </div>
              <div className="awareness-content-container ms-5">
                <h4 className="text-white font-hind">Sanitized Equipment</h4>
                <p className="font-catamaran text-white">
                  In every one hour wash your hand atleast 20 secs
                </p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="awareness-logo-container d-flex justify-content-center align-items-center flex-column">
                <img
                  src="  https://cdn-icons.flaticon.com/png/128/3150/premium/3150895.png?token=exp=1652349631~hmac=11ab3f53561a74159b9400bf8a37cf29"
                  alt=""
                />
              </div>
              <div className="awareness-content-container ms-5">
                <h4 className="text-white font-hind">Social Distancing</h4>
                <p className="font-catamaran text-white">
                  keep atleast 3 feet of distance from each other
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="awareness-logo-container d-flex justify-content-center align-items-center flex-column">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2877/2877627.png"
                  alt=""
                />
              </div>
              <div className="awareness-content-container ms-5">
                <h4 className="text-white font-hind">Temperature Checks</h4>
                <p className="font-catamaran text-white">
                  Available Temperature checks in every sector
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
};

export default CovidAwarnessBar;
