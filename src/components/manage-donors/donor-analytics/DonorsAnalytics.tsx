import React from "react";
import DistrictChart from "../district-chart/DistrictChart";
import GenderChart from "../gender-chart/GenderChart";
import GroupChart from "../group-chart/GroupChart";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));
const DonorsAnalytics = () => {
  return (
    <RootStyle>
      <GroupChart></GroupChart>
      <DistrictChart></DistrictChart>
      <GenderChart></GenderChart>
    </RootStyle>
  );
};

export default DonorsAnalytics;
