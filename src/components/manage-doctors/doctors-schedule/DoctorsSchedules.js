import React, {  useState } from 'react';
import './DoctorSchedule';
import { useAppSelector } from '../../../redux/store';
import DoctorSchedule from './DoctorSchedule';
import { Row } from 'react-bootstrap';


const DoctorsSchedules = () => {
    const [upComingAppointments, setUpComingAppointments] = useState([]);
    // const [appointementInfo,setAppointmentInfo]=useState({});
    const { user } = useAppSelector((state) => state.user);
    useState(()=>{
        fetch(`http://floating-basin-02241.herokuapp.com/allAppointments/doctorSchedule/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setUpComingAppointments(data))
    },[user])
    return (
        <div>
            <Row>
                {
                    upComingAppointments.map(upComingAppointment=><DoctorSchedule upComingAppointment={upComingAppointment} key={upComingAppointment._id}></DoctorSchedule>)
                }
            </Row>
        </div>
    );
};

export default DoctorsSchedules;