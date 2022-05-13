import React from 'react';
import BookCovidTest from './book-covid-test/BookCovidTest';
import ChooseDiagnostics from './choose-diagnostics/ChooseDiagnostics';
import CovidAwarnessBar from './covid-awarness-bar/CovidAwarnessBar';
import DiagnosticCenterBanner from './diagnostic-center-banner/DiagnosticCenterBanner';
import DiagnosticChooseUs from './diagnostic-choose-us/DiagnosticChooseUs';
import DiagnosticSpecialities from './diagnostic-specialities/DiagnosticSpecialities';
import OurDiagnosticServices from './our-diagnostic-services/OurDiagnosticServices';
import PopularTestProcedures from './popular-test-procedures/PopularTestProcedures';
import SimpleProcess from './simple-process/SimpleProcess';

const DiagnosticCenter = () => {
    return (
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
    );
};

export default DiagnosticCenter;