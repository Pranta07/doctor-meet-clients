import React from "react";
// import CovidHelp from "../../components/CovidHelp/CovidHelp";
import CovidPreventions from "../../components/CovidPreventions/CovidPreventions";
import CovidSymptoms from "../../components/CovidSymptoms/CovidSymptoms";
import CovidTop from "../../components/CovidTop/CovidTop";

const CovidPortal = () => {
    return (
        <>
            <CovidTop></CovidTop>
            <CovidPreventions></CovidPreventions>
            <CovidSymptoms></CovidSymptoms>
            {/* <CovidHelp></CovidHelp> */}
        </>
    );
};

export default CovidPortal;
