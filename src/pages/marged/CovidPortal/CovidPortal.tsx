import React from "react";
import Help from "../../components/Covid/CovidHelp/CovidHelp";
import CovidPreventions from "../../components/Covid/CovidPreventions/CovidPreventions";
import CovidSymptoms from "../../components/Covid/CovidSymptoms/CovidSymptoms";
import CovidTop from "../../components/Covid/CovidTop/CovidTop";

const CovidPortal = () => {
  return (
    <>
      <CovidTop></CovidTop>
      <CovidPreventions></CovidPreventions>
      <CovidSymptoms></CovidSymptoms>
      <Help></Help>
    </>
  );
};

export default CovidPortal;
