import React from "react";
import {
  CovidTop,
  CovidPreventions,
  CovidSymptoms,
  CovidHelp,
} from "../../components/covid";

const CovidPortal = () => {
  return (
    <>
      <CovidTop></CovidTop>
      <CovidPreventions></CovidPreventions>
      <CovidSymptoms></CovidSymptoms>
      <CovidHelp></CovidHelp>
    </>
  );
};

export default CovidPortal;
