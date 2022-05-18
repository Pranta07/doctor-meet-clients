import React, { useContext } from "react";
import { SocketContext } from "../../contexts/Context";
import './style/hello.css';
const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div>
          <h4>{call.name} is calling:</h4>
          <button className="btn btn-success" onClick={answerCall}>
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
