import React from "react";
import DoctorsAnalytics from "../DoctorsAnalytics/DoctorsAnalytics";
import DoctorsTable from "../DoctorsTable/DoctorsTable";
import Page from "../../../../components/Page";
const ManageDoctors = () => {
  return (
    <Page title="Manage Doctors">
      <DoctorsAnalytics></DoctorsAnalytics>
      <DoctorsTable></DoctorsTable>
    </Page>
  );
};

export default ManageDoctors;
