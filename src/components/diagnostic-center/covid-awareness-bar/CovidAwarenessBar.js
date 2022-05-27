import { Container, Grid } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import "./CovidAwarenessBar.css";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({

  backgroundColor: theme.palette.background.default,
}))
const CovidAwarenessBar = () => {
  return (
    <>
    <RootStyle className="covid-awareness-bar py-5 mb-5">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="awareness-logo-container d-flex justify-content-center align-items-center flex-column">
                <Icon className="covid-aw-icon" icon="icon-park-outline:handwashing-fluid" />
              </div>
              <div className="awareness-content-container ms-5">
                <h4 className="text-white font-hind">Sanitized Equipment</h4>
                <p className="font-catamaran text-white">
                  In every one hour wash your hand at least 20 secs
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="awareness-logo-container d-flex justify-content-center align-items-center flex-column">
                <Icon className="covid-aw-icon" icon="healthicons:social-distancing-alt-outline" />
              </div>
              <div className="awareness-content-container ms-5">
                <h4 className="text-white font-hind">Social Distancing</h4>
                <p className="font-catamaran text-white">
                  keep at least 3 feet of distance from each other
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="awareness-logo-container d-flex justify-content-center align-items-center flex-column">
              <Icon className="covid-aw-icon" icon="carbon:temperature-feels-like" />

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
    </>
  );
};

export default CovidAwarenessBar;
