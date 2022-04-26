import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../../contexts/Context";

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
    <div>
      <form noValidate autoComplete="off">
        <div>
          <div style={{ width: "600px" }}>
            <h1 className="">Account Info</h1>
            <div className="input-group input-group-sm mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(e) => setName(e.target.value)}
              />
              <CopyToClipboard text={me}>
                <button className="btn btn-warning">Copy Your ID</button>
              </CopyToClipboard>
            </div>
          </div>
          <div>
            <h1>Make a call</h1>
            <div
              className="input-group input-group-sm mb-3"
              style={{ width: "600px" }}
            >
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
                <button className="btn btn-warning" onClick={leaveCall}>
                  Hang Up
                </button>
              ) : (
                <button className="btn btn-danger" onClick={callAUser}>
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
