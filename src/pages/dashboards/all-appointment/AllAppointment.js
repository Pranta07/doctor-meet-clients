import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../../../components/appointment/AppointmentStyle.css';
function MyVerticallyCenteredModal(props) {
 
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Id : {props.appiontment?._id}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p>
          Patient Name : {props.appointment.patientName}
        </p>
        <p>
          Patient Email : {props.appointment.patientEmail}
        </p>
        <p>
          Contact Info : {props.appointment?.mobileNumber}
        </p>
        <p>
          Gender : {props.appointment.gender}
        </p>
        <p>
          Age : {props.appointment.age}
        </p>
        <p>
          Blood Group : {props.appointment.bloodGroup}
        </p>
        <p>
          Date : {props.appointment?.date}
        </p>
        <p>
          Timeslot : {props.appointment.doctorInfo.timeSlot1||props.appointment.doctorInfo.timeSlot2||props.appointment.doctorInfo.timeSlot3||props.appointment.doctorInfo.timeSlot}
        </p>
        <p>
          Doctor Name : {props.appointment.doctorInfo.name}
        </p>
        <p>
          Doctor Email : {props.appointment.doctorInfo.email}
        </p>
        <p>
          Doctor Phone : {props.appointment.doctorInfo.phone}
        </p>
        <p>
          Doctor Department : {props.appointment.doctorInfo.specialist}
        </p>
        <p>
          Doctor Visit : {props.appointment.doctorInfo.visit}
        </p>
        <p>
          Payment Status : {props.appointment.status}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const AllAppointment= ({appointment}) => {
  const [modalShow, setModalShow] = React.useState(false);
  
    const deleteAnAppointment=()=>{
      const confirm=window.confirm("Are you sure want to delete the data?");
      if(confirm){
        fetch(`https://floating-basin-02241.herokuapp.com/allAppointments/${appointment._id}`,{
          method:"Delete",
  
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount){
            alert("Data is Deleted Successfully");

          }
        })
      }
      
    }
    return (
      <tr className='text-center' style={{backgroundColor:"#c8d6e5",borderBottom: "2px solid #222f3e"}}>
      <td className="appointment-table-row-data">{appointment?._id}</td>
      <td className="appointment-table-row-data">{appointment?.patientName}</td>
      <td className="appointment-table-row-data">{appointment?.doctorInfo.name}</td>
      <td className="appointment-table-row-data">{appointment.doctorInfo.timeSlot || appointment.doctorInfo.timeSlot1 || appointment.doctorInfo.timeSlot2 || appointment.doctorInfo.timeSlot3}</td>
      <td className="appointment-table-row-data">{appointment?.date}</td>
      <td className="appointment-table-row-data">{appointment?.status}</td>
      
      <td className="appointment-table-row-data">
        
        <>

      <i className="fas fa-info" onClick={() => setModalShow(true)}></i>

      <MyVerticallyCenteredModal
        show={modalShow}
        appointment={appointment}
        onHide={() => setModalShow(false)}
      />
    </>
        </td>
      <td className="appointment-table-row-data">
        <i className="fas fa-trash" onClick={deleteAnAppointment}></i>
      </td>
    </tr>
    );
};

export default AllAppointment;