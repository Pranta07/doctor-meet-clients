import React from "react";
import DistrictChart from "../district-chart/DistrictChart";
import GenderChart from "../gender-chart/GenderChart";
import GroupChart from "../group-chart/GroupChart";

const DonorsAnalytics = () => {
  return (
    <div>
      <GroupChart></GroupChart>
      <DistrictChart></DistrictChart>
      <GenderChart></GenderChart>
    </div>
  );
};

export default DonorsAnalytics;
