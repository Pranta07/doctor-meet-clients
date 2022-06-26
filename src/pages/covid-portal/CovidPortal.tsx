import React from "react";
import Help from "../../components/covid/CovidHelp";
import CovidPreventions from "../../components/covid/CovidPreventions";
import CovidSymptoms from "../../components/covid/CovidSymptoms";
import CovidTop from "../../components/covid/CovidTop";
// @mui
import { styled } from "@mui/material/styles";
// _mock_

// components
import Page from "../../components/Page";

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,

  minHeight: "100%",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const CovidPortal = () => {
  return (
    <Page title="Covid Portal">
      <RootStyle>
        <CovidTop></CovidTop>
        <CovidPreventions></CovidPreventions>
        <CovidSymptoms></CovidSymptoms>
        <Help></Help>
      </RootStyle>
    </Page>
  );
};

export default CovidPortal;
