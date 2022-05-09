import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useFirebase from "../../firebase/useFirebase/useFirebase";
import MyAppointment from "./MyAppointment";
import Page from "../Page";
const MyAppointments = () => {
    const { user } = useFirebase();
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch(
            `https://doctor-meet-appointment-server.vercel.app/allAppointments/single?patientEmail=${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => setAppointments(data));
    }, [user]);
    return (
        <Page title="All Appointments">
        <div>
            <h1>Hello From My Appointments</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Doctor's Name</th>
                        <th>Timeslot</th>
                        <th>Payment Status</th>
                        <th>Payment Fee</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {appointments?.map((appointment,index) => (
                        <MyAppointment
                        key={index}
                            appointment={appointment}
                        ></MyAppointment>
                    ))}
                </tbody>
            </Table>
        </div>
        </Page>
    );
};

export default MyAppointments;
