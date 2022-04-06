import React from "react";
import DonorFilter from "../../components/DonorFilter/DonorFilter";
import DonorHeader from "../../components/DonorHeader/DonorHeader";
import Donors from "../../components/Donors/Donors";

const FindDonors = () => {
    return (
        <div>
            <DonorHeader></DonorHeader>
            <DonorFilter></DonorFilter>
            <Donors></Donors>
        </div>
    );
};

export default FindDonors;
