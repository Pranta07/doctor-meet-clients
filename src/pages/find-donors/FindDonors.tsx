import React from "react";
import { Provider } from "react-redux";
import { DonorFilter, DonorHeader } from "../blood-donor/index";
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
