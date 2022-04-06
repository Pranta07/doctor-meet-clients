import React, { useContext } from 'react';
import { SocketContext } from '../../Context';


const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <div className='w-25'>
            {call.isReceivingCall && !callAccepted && (
                <div className='d-flex justify-content-between'>
                    <h1>{call.name} is calling:</h1>
                    <button className='btn btn-warning' onClick={answerCall}>
                        Answer
                    </button>
                </div>
            )}
        </div>
    );
};

export default Notifications;
