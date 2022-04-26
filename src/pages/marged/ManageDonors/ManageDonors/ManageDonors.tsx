import React from "react";
import DonorsAnalytics from "../DonorsAnalytics/DonorsAnalytics";
import DonorsTable from "../DonorsTable/DonorsTable";
import Page from "../../../../components/Page";
const ManageDonors = () => {
  return (
    <Page title="Manage Donors">
      <DonorsAnalytics></DonorsAnalytics>
      <DonorsTable></DonorsTable>
    </Page>
  );
};

export default ManageDonors;
