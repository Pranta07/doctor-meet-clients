import React from "react";
import ExperienceChart from "../experience-chart/ExperienceChart";
import GenderChartDoctors from "../gender-chart-doctors/GenderChartDoctors";
import SpecialistChart from "../specialist-chart/SpecialistChart";

const DoctorsAnalytics = () => {
  return (
    <div>
      <SpecialistChart></SpecialistChart>
      <GenderChartDoctors></GenderChartDoctors>
      <ExperienceChart></ExperienceChart>
    </div>
  );
};

export default DoctorsAnalytics;
