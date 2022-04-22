import React from "react";
import DoctorsAnalytics from "../DoctorsAnalytics/DoctorsAnalytics";
import DoctorsTable from "../DoctorsTable/DoctorsTable";

const ManageDoctors = () => {
    return (
        <div>
            <DoctorsAnalytics></DoctorsAnalytics>
            <DoctorsTable></DoctorsTable>
        </div>
    );
};

export default ManageDoctors;
