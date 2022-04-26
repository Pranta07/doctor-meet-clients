import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AllAppointment from "../all-appointment/AllAppointment";
import Page from "../../../components/Page";
const AllAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("https://doctor-meet-appointment-server.vercel.app/allAppointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  return (
    <Page title="Manage Appointments">
      <Table>
        <thead>
          <tr>
            <th>Appointment Id</th>
            <th>Patient Name</th>
            <th>Patient Email</th>
            <th>Doctor Name</th>
            <th>Doctor Specialize</th>
            <th>Timeslot</th>
            <th>Status</th>
            <th>Action</th>
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
