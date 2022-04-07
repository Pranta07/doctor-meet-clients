import React from "react";
import DonorFilter from "../../components/Blood_Dooner/DonorFilter/DonorFilter";
import DonorHeader from "../../components/Blood_Dooner/DonorHeader/DonorHeader";

const FindDonors = () => {
    return (
        <div>
            <DonorHeader></DonorHeader>
            <DonorFilter></DonorFilter>
        </div>
    );
};

export default FindDonors;
