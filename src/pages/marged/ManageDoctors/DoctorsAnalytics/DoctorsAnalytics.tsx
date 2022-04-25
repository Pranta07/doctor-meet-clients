import React from "react";
import ExperienceChart from "../ExperienceChart/ExperienceChart";
import GenderChartDoctors from "../GenderChartDoctors/GenderChartDoctors";
import SpecialistChart from "../SpecialistChart/SpecialistChart";

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
