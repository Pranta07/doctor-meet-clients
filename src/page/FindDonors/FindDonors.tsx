import React from "react";
import { Provider } from "react-redux";
import DonorFilter from "../../components/Blood_Dooner/DonorFilter/DonorFilter";
import DonorHeader from "../../components/Blood_Dooner/DonorHeader/DonorHeader";
import { store } from "../../redux/store";

const FindDonors = () => {
    return (
        <div>
            <Provider store={store}>
                <DonorHeader></DonorHeader>
                <DonorFilter></DonorFilter>
            </Provider>
        </div>
    );
};

export default FindDonors;
