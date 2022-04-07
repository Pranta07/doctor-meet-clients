import React, { useEffect } from 'react';
import Notifications from './Notifications';
import Sidebar from './Sidebar';
import VideoPlayer from './VideoPlayer';

const VideoChatRoute = () => {
    useEffect(() => {
        if (!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }, [])


    return (
        <div>
            <h1>This is video chat route</h1>
            <VideoPlayer />
            <Sidebar>
                <Notifications />
            </Sidebar>
        </div>
    );
};

export default VideoChatRoute;