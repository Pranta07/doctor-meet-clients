import React from 'react';


const AllAppointment= ({appointment}) => {
    const deleteAnAppoinment=(e)=>{
      e.preventDefault();
      fetch(`https://doctor-meet-appointment-server.vercel.app/allAppointments/${appointment._id}`,{
        method:"Delete",

      })
      .then(res=>res.json())
      .then(data=>console.log(data))
    }
    return (
      <tr>
      <td>{appointment?._id}</td>
      <td>{appointment?.patientName}</td>
      <td>{appointment?.patientEmail}</td>
      <td>{appointment?.doctorInfo.name}</td>
      <td>{appointment?.doctorInfo.specialist}</td>
      <td>{appointment?.doctorInfo.timeSlot}</td>
      <td>{appointment?.status}</td>
      <td><button className="btn btn-danger" onClick={deleteAnAppoinment}>Cancel Appointment</button></td>
      
    </tr>
    );
};

export default AllAppointment;