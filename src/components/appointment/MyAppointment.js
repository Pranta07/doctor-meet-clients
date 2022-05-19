import React from 'react';
import { Link } from 'react-router-dom';

const MyAppointment = ({appointment}) => {
    console.log(appointment);
    return (
        <tr>
      <td>{appointment.doctorInfo.name}</td>
      <td>{appointment.doctorInfo.timeSlot}</td>
      <td>{appointment.status}</td>
      <td>{appointment.doctorInfo.visit}</td>
      <td>
          <Link to={`/pay-appointment-fee/${appointment._id}`}>
          <button className='btn btn-warning'>Pay</button>
          </Link>
        </td>
    </tr>
    );
};

export default MyAppointment;