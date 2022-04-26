import React from "react";
import { Provider } from "react-redux";
import DonorFilter from "../blood-donor/donor-filter/DonorFilter";
import DonorHeader from "../blood-donor/donor-header/DonorHeader";
import { store } from "../../../redux/store";
// @mui
import { styled } from "@mui/material/styles";
// _mock_

// components
import Page from "../../../components/Page";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  minHeight: "100%",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const FindDonors = () => {
  return (
    <Provider store={store}>
      <Page title="Find Donors">
        <RootStyle>
          <DonorHeader></DonorHeader>
          <DonorFilter></DonorFilter>
        </RootStyle>
      </Page>
    </Provider>
  );
};

export default FindDonors;
