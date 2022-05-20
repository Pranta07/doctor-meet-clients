import React from "react";
import { Provider } from "react-redux";
import DonorFilter from "../../components/blood-donor/donor-filter/DonorFilter";
import DonorHeader from "../../components/blood-donor/donor-header/DonorHeader";

// @mui
import { styled } from "@mui/material/styles";
// _mock_

// components
import Page from "../../components/Page";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  minHeight: "100%",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

const FindDonors = () => {
  return (
    <Page title="Find Donors">
      <RootStyle>
        <DonorHeader></DonorHeader>
        <DonorFilter></DonorFilter>
      </RootStyle>
    </Page>
  );
};

export default FindDonors;
