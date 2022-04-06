import React, { useState, useContext } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { SocketContext } from '../../Context';


const Sidebar = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    const hangCall = () => {
        leaveCall();
        window.location.reload();
    }
    console.log(me)
    return (
        <div>
            <div elevation={10}>
                <form noValidate autoComplete="off">
                    <div>
                        <div>
                            <h1 className='mb-3'>Account Info</h1>
                            <div class="input-group mb-3" style={{ width: "400px" }}>
                                <input type="text" class="form-control" placeholder="Your Name" aria-label="Recipient's username" aria-describedby="button-addon2" value={name} onChange={(e) => setName(e.target.value)} />

                                <CopyToClipboard text={me}>
                                    <button className='btn btn-danger'>Copy Your ID</button>
                                </CopyToClipboard>
                                {/* <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button> */}
                            </div>
                            {/* <input class="form-control" label="Name"/> */}



                        </div>
                        <div>
                            <h1>Make a call</h1>
                            <div class="input-group mb-3" style={{ width: "400px" }}>
                                <input class="form-control" label="ID to call" placeholder='Enter The Id' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} type="text" />
                                {callAccepted && !callEnded ? (
                                    <button className='btn btn-danger' onClick={hangCall}>Hang Up</button>
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
