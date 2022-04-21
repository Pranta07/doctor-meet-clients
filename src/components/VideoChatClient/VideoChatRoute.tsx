import React, { useEffect } from 'react';
import { ContextProvider } from '../../context/Context';
import Notifications from './Notifications';
import Sidebar from './Sidebar';
import VideoPlayer from './VideoPlayer';

const VideoChatRoute = () => {
  useEffect(() => {
    if (!window.location.hash) {
      window.location.href = window.location + '#loaded';
      window.location.reload();
    }
  }, []);

    return (
        <ContextProvider>
        <div className='container'>
            <h1 className='text-center'>This is video chat route</h1>
            <VideoPlayer />
            <Sidebar>
                <Notifications />
            </Sidebar>
        </div>
         </ContextProvider>
    );
};

export default VideoChatRoute;
