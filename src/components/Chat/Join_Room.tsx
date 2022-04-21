import { useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';
import Chat from './Chat';


const socket = io('http://localhost:8888');

function Join_room() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState<boolean>(false);

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', room);
      localStorage.setItem('showChart', JSON.stringify(showChat));
      localStorage.setItem('roomid', room);
      localStorage.setItem('userName', username);
      setShowChat(true);
    }
  };

    return (
        <div className="App">
            {!showChat ? (
                <div className="joinChatContainer">
                    <h3>Join A Chat</h3>
                    <input
                        type="text"
                        placeholder="John..."
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Room ID..."
                        onChange={(event) => {
                            setRoom(event.target.value);
                        }}
                    />
                    <button onClick={joinRoom}>Join A Room</button>
                </div>
            ) : (
                <Chat socket={socket} username={username} room={room} />
            )}
        </div>
    );
}

export default Join_room;
