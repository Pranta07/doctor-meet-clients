import React from "react";
import "./DashboardHome.css";
import LastAppointments from "./last-appointments/LastAppointments";
import PatientAgeDemoGraphic from "./patient-demographic/PatientAgeDemoGraphic";
import PatientGenderDemoGraphic from "./patient-demographic/PatientGenderDemoGraphic";
import Survey from "./survey/Survey";
import Page from "../../../components/Page";

const DashboardHome = () => {
    return (
        <Page title="Dashboard Home">
            <div className="DashboardHome">
                <div>
                    {/* chart section */}
                    <Survey></Survey>
                </div>

                <div className="px-4">
                    {/* Last Appoinments Section */}
                    <LastAppointments></LastAppointments>
                </div>

                <div className="row">
                    {/* Patient Demographic */}
                    <div className="col-lg-6">
                        <PatientAgeDemoGraphic></PatientAgeDemoGraphic>
                    </div>
                    <div className="col-lg-6">
                        <PatientGenderDemoGraphic></PatientGenderDemoGraphic>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default DashboardHome;
