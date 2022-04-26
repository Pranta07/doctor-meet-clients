import React from "react";
import DoctorsAnalytics from "../doctor-analytics/DoctorsAnalytics";
import DoctorsTable from "../doctors-table/DoctorsTable";
import Page from "../../Page";
const ManageDoctors = () => {
  return (
    <Page title="Manage Doctors">
      <DoctorsAnalytics></DoctorsAnalytics>
      <DoctorsTable></DoctorsTable>
    </Page>
  );
};

export default ManageDoctors;
