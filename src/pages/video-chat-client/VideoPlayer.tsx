import React, { useContext } from "react";
import { SocketContext } from "../../contexts/Context";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div className="d-flex justify-content-between">
      {stream && (
        <div>
          <div>
            <h1>{name || "Name"}</h1>
            <video
              className="video-call-width"
              playsInline
              ref={myVideo}
              autoPlay
            />
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div>
          <div>
            <h1>{call.name || "Name"}</h1>
            <video
              className="video-call-width"
              playsInline
              ref={userVideo}
              autoPlay
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
