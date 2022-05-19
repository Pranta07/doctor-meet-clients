import React from "react";
import BookCovidTest from "./book-covid-test/BookCovidTest";
import ChooseDiagnostics from "./choose-diagnostics/ChooseDiagnostics";
import CovidAwarnessBar from "./covid-awarness-bar/CovidAwarnessBar";
import DiagnosticCenterBanner from "./diagnostic-center-banner/DiagnosticCenterBanner";
import DiagnosticChooseUs from "./diagnostic-choose-us/DiagnosticChooseUs";
import DiagnosticSpecialities from "./diagnostic-specialities/DiagnosticSpecialities";
import OurDiagnosticServices from "./our-diagnostic-services/OurDiagnosticServices";
import PopularTestProcedures from "./popular-test-procedures/PopularTestProcedures";
import SimpleProcess from "./simple-process/SimpleProcess";
import Page from "../../components/Page";
import styled from "@emotion/styled";

const RootStyle = styled("div")(() => ({
  height: "100%",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
}));

const DiagnosticCenter = () => {
  return (
    <Page title="Diagnostic Center">
      <RootStyle>
        <ContentStyle>
          <div>
            <DiagnosticCenterBanner></DiagnosticCenterBanner>
            <CovidAwarnessBar></CovidAwarnessBar>
            <PopularTestProcedures></PopularTestProcedures>
            <OurDiagnosticServices></OurDiagnosticServices>
            <DiagnosticChooseUs></DiagnosticChooseUs>
            <BookCovidTest></BookCovidTest>
            <DiagnosticSpecialities></DiagnosticSpecialities>
            <ChooseDiagnostics></ChooseDiagnostics>
            <SimpleProcess></SimpleProcess>
          </div>
        </ContentStyle>
      </RootStyle>
    </Page>
  );
};

export default DiagnosticCenter;
