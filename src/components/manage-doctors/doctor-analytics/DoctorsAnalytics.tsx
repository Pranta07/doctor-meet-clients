import React from "react";
import ExperienceChart from "../experience-chart/ExperienceChart";
import GenderChartDoctors from "../gender-chart-doctors/GenderChartDoctors";
import SpecialistChart from "../specialist-chart/SpecialistChart";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));
const DoctorsAnalytics = () => {
  return (
    <RootStyle>
      <SpecialistChart></SpecialistChart>
      <GenderChartDoctors></GenderChartDoctors>
      <ExperienceChart></ExperienceChart>
    </RootStyle>
  );
};

export default DoctorsAnalytics;
