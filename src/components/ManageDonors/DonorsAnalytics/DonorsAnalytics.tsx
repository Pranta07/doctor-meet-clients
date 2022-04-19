import React from "react";
import DistrictChart from "../DistrictChart/DistrictChart";
import GenderChart from "../GenderChart/GenderChart";
import GroupChart from "../GroupChart/GroupChart";

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
