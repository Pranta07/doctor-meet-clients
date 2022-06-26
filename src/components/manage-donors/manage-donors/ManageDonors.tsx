import React from "react";
import DonorsAnalytics from "../donor-analytics/DonorsAnalytics";
import DonorsTable from "../donors-table/DonorsTable";
import Page from "../../Page";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));
const ManageDonors = () => {
  return (
    <Page title="Manage Donors">
      <RootStyle>
        <DonorsAnalytics></DonorsAnalytics>
        <DonorsTable></DonorsTable>
      </RootStyle>
    </Page>
  );
};

export default ManageDonors;
