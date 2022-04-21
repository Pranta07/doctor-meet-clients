import React from "react";
import { Provider } from "react-redux";
import DonorFilter from "../../components/blood-donor/DonorFilter";
import DonorHeader from "../../components/blood-donor/DonorHeader";
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
