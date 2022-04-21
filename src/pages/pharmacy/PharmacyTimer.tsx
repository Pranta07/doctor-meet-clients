import React from "react";
import { useTimer } from "react-timer-hook";
import './Pharmecy_timar.css';

const Pharmecy_timar = ({ expiryTimestamp }: any) => {
  const {
    seconds,
    minutes,
    hours
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "28px", fontWeight: 600,marginTop:'100px' }} >
        <h1 className="my-5" >
          Best Deals of the week! <span className="timar-style" >0{hours}</span> : <span className="timar-style">{minutes}</span> : <span className="timar-style">{seconds}</span>
        </h1>
      </div>
      {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getMonth()+19890);
          restart(time);
        }}
      >
        Restart
      </button> */}
    </div>
  );
};

export default Pharmecy_timar;
