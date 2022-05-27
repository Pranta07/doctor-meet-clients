// @mui
import { styled } from "@mui/material/styles";
import React from "react";
import DonorFilter from "../../components/blood-donor/donor-filter/DonorFilter";
import DonorHeader from "../../components/blood-donor/donor-header/DonorHeader";
// _mock_
// components
import Page from "../../components/Page";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }: any) => ({
  minHeight: "100%",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
  height: "100%",
  backgroundColor: theme.palette.background.default,
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
