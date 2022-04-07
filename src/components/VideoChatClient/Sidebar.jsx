import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../../context/Context';

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  return (
    <div>
      <div elevation={10}>
        <form noValidate autoComplete="off">
          <div>
            <div style={{ width: "600px" }}>
              <h1 className=''>Account Info</h1>
              <div class="input-group input-group-sm mb-3">

                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setName(e.target.value)} />
                <CopyToClipboard text={me}>
                  <button className='btn btn-warning'>Copy Your ID</button>
                </CopyToClipboard>
              </div>


            </div>
            <div>
              <h1>Make a call</h1>
              <div class="input-group input-group-sm mb-3" style={{ width: "600px" }}>

                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e) => setName(e.target.value)}
                  label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)}
                />
                {callAccepted && !callEnded ? (
                  <button className='btn btn-warning' onClick={leaveCall}>Hang Up</button>
                ) : (
                  <button className='btn btn-danger' onClick={() => callUser(idToCall)}>
                    Call
                  </button>
                )}
              </div>


            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
