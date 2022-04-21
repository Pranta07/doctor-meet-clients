import React from "react";
import DistrictChart from "./DistrictChart";
import GenderChart from "./GenderChart";
import GroupChart from "./GroupChart";

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
