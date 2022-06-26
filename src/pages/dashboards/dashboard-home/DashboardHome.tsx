import React from "react";
import "./DashboardHome.css";
import LastAppointments from "./last-appointments/LastAppointments";
import Survey from "./survey/Survey";
import Page from "../../../components/Page";
import { styled } from "@mui/material/styles";
import SpecialistChart from "../../../components/manage-doctors/specialist-chart/SpecialistChart";
import GroupChart from "../../../components/manage-donors/group-chart/GroupChart";

const RootStyle = styled("div")(({ theme }: any) => ({
    height: "100%",
    backgroundColor: theme.palette.background.default,
}));
const DashboardHome = () => {
    return (
        <Page title="Dashboard Home">
            <RootStyle>
                <div className="DashboardHome">
                    {/* <div className="row mx-auto ps-2">
            <div className="col-lg-3 col-12 col-md-6">
              <div className="dashboardCommonDivStyle d-flex justify-content-between bg-light p-3  align-items-center">
                <i className="fas commonIconStyle fa-briefcase-medical"></i>
                <div>
                  <h5>Appointment</h5>
                  <h5 className="text-primary">256</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6">
              <div className="dashboardCommonDivStyle d-flex justify-content-between bg-light p-3  align-items-center">
                <i className="fas  commonIconStyle fa-bed"></i>
                <div>
                  <h5>New Patients</h5>
                  <h5 className="text-primary">250</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6">
              <div className="dashboardCommonDivStyle d-flex justify-content-between bg-light p-3  align-items-center">
                <i className="fas  commonIconStyle fa-bed"></i>
                <div>
                  <h5>Operations</h5>
                  <h5 className="text-primary">25</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 col-md-6">
              <div className="dashboardCommonDivStyle d-flex justify-content-between bg-light p-3  align-items-center">
                <i className="fas commonIconStyle  fa-dollar-sign"></i>
                <div>
                  <h5>Earnings</h5>
                  <h5 className="text-primary">$5238</h5>
                </div>
              </div>
            </div>
          </div> */}

                    <div className="mb-5 pb-5">
                        <SpecialistChart></SpecialistChart>
                    </div>

                    <div className="my-5 py-5">
                        <GroupChart></GroupChart>
                    </div>

                    <div>
                        <Survey></Survey>
                    </div>

                    <div className="px-4 my-5 py-5">
                        <LastAppointments></LastAppointments>
                    </div>
                </div>
            </RootStyle>
        </Page>
    );
};

export default DashboardHome;
