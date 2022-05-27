import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTime from '../../hooks/useTime';
import enabledIcon from '../../../src/assets/my-appointments-video -enable.png';
import disabledIcon from '../../../src/assets/my-appointments-video-disable.png';
import './AppointmentStyle.css';
import { CopyToClipboard } from "react-copy-to-clipboard";


const MyAppointment = ({appointment}) => {
    
    const { date } = useTime();
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        
        if (appointment.date === date && appointment.status === "paid") {
            setDisabled(false);

        }
    }, [appointment.date, date, appointment.status])
    const copyId = () => {
        alert(`Id "${appointment.doctorInfo?.room}" is copied successfully`);
    }
    return (
        <tr style={{backgroundColor:"#EFF6FF"}}>
            <td className="appointment-table-row-data">{appointment.doctorInfo.name}</td>
            <td className="appointment-table-row-data">{appointment.doctorInfo.timeSlot || appointment.doctorInfo.timeSlot1 || appointment.doctorInfo.timeSlot2 || appointment.doctorInfo.timeSlot3}</td>
            <td className="appointment-table-row-data">{appointment?.date}</td>
            <td className="appointment-table-row-data">{appointment.status}</td>
            <td className="appointment-table-row-data">${appointment.doctorInfo.visit}</td>

            {
                !disabled ? <td className="appointment-table-row-data">
                    <CopyToClipboard text={appointment.doctorInfo?.room}>
                    <Link to="/virtual-meet">
                    <img src={enabledIcon} alt="meet-icon" style={{ width: "40px", height: "40px" }}
                            onClick={copyId}
                            disabled={disabled} title={`Available at ${appointment.doctorInfo.timeSlot1 || appointment.doctorInfo.timeSlot2 || appointment.doctorInfo.timeSlot3 || appointment.doctorInfo.timeSlot}`} className="hover-cursor"
                        />
                    </Link>
                        
                    </CopyToClipboard>
                    {/* <img src={enabledIcon} alt="meet-icon" style={{ width: "40px", height: "40px" }}
                        disabled={disabled} title={`Available at ${appointment.doctorInfo.timeSlot1 || appointment.doctorInfo.timeSlot2 || appointment.doctorInfo.timeSlot3 || appointment.doctorInfo.timeSlot}`} className="hover-cursor"
                    /> */}




                </td> : <td className="appointment-table-row-data">
                    <img src={disabledIcon} alt="meet-icon" style={{ width: "40px", height: "40px" }}
                        disabled={disabled} title={`Available at ${appointment.doctorInfo.timeSlot1 || appointment.doctorInfo.timeSlot2 || appointment.doctorInfo.timeSlot3 || appointment.doctorInfo.timeSlot}`}
                    />



                </td>
            }

            <td className="appointment-table-row-data">
                <Link to={`/pay-appointment-fee/${appointment._id}`}>
                    <button className='btn-appointment-pay'>
                        Pay
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default MyAppointment;