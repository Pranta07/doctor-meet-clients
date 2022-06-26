import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../../contexts/Context";
import "./style/hello.css";
const Sidebar = ({ children }: any) => {
  const { me, callAccepted, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  const callAUser = (e: any) => {
    e.preventDefault();
    callUser(idToCall);
  };
  console.log(me);
  return (
    <div className="video-chat-sidebar">
      <form noValidate autoComplete="off">
        <div className="row">
          <div className="col-lg-6 col-md-6 ">
            <h6 className="">Account Info</h6>
            <div className="input-group input-group-sm mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => setName(e.target.value)}
              />
              <CopyToClipboard text={me}>
                <button onClick={callAUser} className="btn btn-primary">
                  Copy Your ID
                </button>
              </CopyToClipboard>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <h6>Make a call</h6>
            <div className="input-group input-group-sm mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => setIdToCall(e.target.value)}
                placeholder="ID to call"
                value={idToCall}
              />
              {callAccepted && !callEnded ? (
                <button className="btn btn-danger" onClick={leaveCall}>
                  Hang Up
                </button>
              ) : (
                <button className="btn btn-success" onClick={callAUser}>
                  Call
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
      {children}
    </div>
  );
};

export default Sidebar;
