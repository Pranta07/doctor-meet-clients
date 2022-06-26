import React from "react";
import { styled } from "@mui/material/styles";
import BookCovidTest from "./book-covid-test/BookCovidTest";
import ChooseDiagnostics from "./choose-diagnostics/ChooseDiagnostics";
import CovidAwarenessBar from "./covid-awareness-bar/CovidAwarenessBar";
import DiagnosticCenterBanner from "./diagnostic-center-banner/DiagnosticCenterBanner";
import DiagnosticChooseUs from "./diagnostic-choose-us/DiagnosticChooseUs";
import DiagnosticSpecialties from "./diagnostic-specialties/DiagnosticSpecialties";
import OurDiagnosticServices from "./our-diagnostic-services/OurDiagnosticServices";
import PopularTestProcedures from "./popular-test-procedures/PopularTestProcedures";
import SimpleProcess from "./simple-process/SimpleProcess";
import Page from "../../components/Page";
import NewBanner from "./new-banner/NewBanner";

const RootStyle = styled("div")(({ theme }: any) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));
const ContentStyle = styled("div")(({ theme }: any) => ({
  overflow: "hidden",
  position: "relative",
}));

const DiagnosticCenter = () => {
  return (
    <Page title="Diagnostic Center">
      <RootStyle>
        <ContentStyle>
          <div>
            {/* <DiagnosticCenterBanner></DiagnosticCenterBanner> */}
            <NewBanner></NewBanner>
            <CovidAwarenessBar></CovidAwarenessBar>
            <PopularTestProcedures></PopularTestProcedures>
            <OurDiagnosticServices></OurDiagnosticServices>
            <DiagnosticChooseUs></DiagnosticChooseUs>
            <BookCovidTest></BookCovidTest>
            <DiagnosticSpecialties></DiagnosticSpecialties>
            <ChooseDiagnostics></ChooseDiagnostics>
            <SimpleProcess></SimpleProcess>
          </div>
        </ContentStyle>
      </RootStyle>
    </Page>
  );
};

export default DiagnosticCenter;
