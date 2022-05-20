import React from 'react';


const AllAppointment= ({appointment}) => {
    const deleteAnAppointment=(e)=>{
      e.preventDefault();
      fetch(`https://floating-basin-02241.herokuapp.com/allAppointments/${appointment._id}`,{
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
      <td><button className="btn btn-danger" onClick={deleteAnAppointment}>Cancel Appointment</button></td>
      
    </tr>
    );
};

export default AllAppointment;