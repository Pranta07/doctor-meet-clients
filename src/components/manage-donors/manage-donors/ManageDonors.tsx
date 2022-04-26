import React from "react";
import DonorsAnalytics from "../donor-analytics/DonorsAnalytics";
import DonorsTable from "../donors-table/DonorsTable";
import Page from "../../Page";
const ManageDonors = () => {
  return (
    <Page title="Manage Donors">
      <DonorsAnalytics></DonorsAnalytics>
      <DonorsTable></DonorsTable>
    </Page>
  );
};

export default ManageDonors;
