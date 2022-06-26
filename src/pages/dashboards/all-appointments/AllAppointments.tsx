import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AllAppointment from "../all-appointment/AllAppointment";
import '../../../components/appointment/AppointmentStyle.css';
import Page from "../../../components/Page";
const AllAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("https://floating-basin-02241.herokuapp.com/allAppointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [appointments]);
  return (
    <Page title="Manage Appointments">
      <Table className="w-100 appointment-table">
        <thead>
          <tr style={{backgroundColor:"#00d2d3"}} className="appointment-table-header-container text-center">
            <th className="appointment-table-header">Appointment Id</th>
            <th className="appointment-table-header">Patient Name</th>
            <th className="appointment-table-header">Doctor Name</th>
            <th className="appointment-table-header">Time Slot</th>
            <th className="appointment-table-header">Date</th>
            <th className="appointment-table-header">Status</th>
            <th className="appointment-table-header">More</th>
            <th className="appointment-table-header">Delete</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment: any, id) => (
            <AllAppointment appointment={appointment} key={id}></AllAppointment>
          ))}
        </tbody>
      </Table>
    </Page>
  );
};

export default AllAppointments;
