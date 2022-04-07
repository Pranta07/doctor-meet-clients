import React from "react";
import DonorFilter from "../../components/DonorFilter/DonorFilter";
import DonorHeader from "../../components/DonorHeader/DonorHeader";

const FindDonors = () => {
    return (
        <div>
            <DonorHeader></DonorHeader>
            <DonorFilter></DonorFilter>
        </div>
    );
};

export default FindDonors;
