import React from "react";
import DoctorsAnalytics from "../doctor-analytics/DoctorsAnalytics";
import DoctorsTable from "../doctors-table/DoctorsTable";
import Page from "../../Page";
import { styled } from "@mui/material/styles";

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
}));
const ManageDoctors = () => {
  return (
    <Page title="Manage Doctors">
      <RootStyle>
        <DoctorsAnalytics></DoctorsAnalytics>
        <DoctorsTable></DoctorsTable>
      </RootStyle>
    </Page>
  );
};

export default ManageDoctors;
