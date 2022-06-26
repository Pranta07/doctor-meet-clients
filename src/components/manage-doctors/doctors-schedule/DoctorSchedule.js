import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTime from '../../../hooks/useTime';
import './style/index.css';
import enabledIcon from '../../../assets/my-appointments-video -enable.png';
import disabledIcon from '../../../assets/my-appointments-video-disable.png';
import CopyToClipboard from 'react-copy-to-clipboard';

const DoctorSchedule = ({ upComingAppointment }) => {
    const { date } = useTime();
    const [disabled, setDisabled] = useState(true);
    const [paid,setPaid]=useState(false);
    
    useEffect(() => {
        if(upComingAppointment.status === "paid"){
            setPaid(true);
        }
        else{
            setPaid(false);
        }
        if (upComingAppointment.date === date) {
            setDisabled(false);

        }
    }, [ upComingAppointment.date, upComingAppointment.status,date])
    const copyId = () => {
        alert(`Id "${upComingAppointment.doctorInfo?.room}" is copied successfully`);
       
    }

    return (
        paid && <Col xs={12} sm={12} md={6} lg={4} >
        <Card>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">{ }</Card.Subtitle>
                <Card.Text>
                    <div className='schedule-info-container d-flex justify-content-between align-items-center mb-3'>
                        <h2 className='schedule-info-subject' >Patient Name</h2>
                        <h3 className='schedule-info-context'>{upComingAppointment?.patientName}</h3>
                    </div>

                    <div className='schedule-info-container d-flex justify-content-between align-items-center mb-3'>
                        <h2 className='schedule-info-subject'>Patient Email</h2>
                        <h3 className='schedule-info-context'>{upComingAppointment?.patientEmail}</h3>
                    </div>
                    <div className='schedule-info-container d-flex justify-content-between align-items-center mb-3'>
                        <h2 className='schedule-info-subject'>Date</h2>
                        <h3 className='schedule-info-context'>{upComingAppointment?.date}</h3>
                    </div>
                    
                    <div className='schedule-info-container d-flex justify-content-between align-items-center mb-3'>
                        <h2 className='schedule-info-subject'>Time</h2>
                        <h3 className='schedule-info-context'>{upComingAppointment?.timeSlot}</h3>
                    </div>


                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-5 mb-3">
                {
            !disabled ? <td className="appointment-table-row-data">
                <CopyToClipboard text={upComingAppointment.doctorInfo?.room}>
                    <Link to="/virtual-meet">
                    <img src={enabledIcon} alt="meet-icon" style={{ width: "40px", height: "40px" }}
                        onClick={copyId}
                        disabled={disabled} className="hover-cursor"
                    />
                    </Link>
                    
                </CopyToClipboard>
                


            </td> : <td className="appointment-table-row-data">
                <img src={disabledIcon} alt="meet-icon" style={{ width: "40px", height: "40px" }}
                    disabled={disabled}
                />



            </td>
        }
                   <i className="fas fa-info"></i>

                </div>

            </Card.Body>
        </Card>
    </Col>
    );
};

export default DoctorSchedule;