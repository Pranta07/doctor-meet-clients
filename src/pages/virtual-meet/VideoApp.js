import './VideoApp.scss';
import { styled } from "@mui/material/styles";
import React, {Component} from 'react';
import Room from './Room';
import { Button } from '@mui/material';
const { connect } = require('twilio-video');

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
  paddingLeft: theme.spacing(25),
  paddingRight: theme.spacing(25),
}));

class VideoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      identity: '',
      room: null
    }

    this.inputRef = React.createRef();

    this.joinRoom = this.joinRoom.bind(this);
    this.leaveRoom = this.leaveRoom.bind(this);
    this.updateIdentity = this.updateIdentity.bind(this);
    this.removePlaceholderText = this.removePlaceholderText.bind(this);
  }
  
  async joinRoom() {
    try {
      const response =await fetch("https://stormy-springs-27549.herokuapp.com/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identity:this.state.identity,
          roomSid:"cool-room",
        }),
      });




      const data = await response.json();
      
      const room = await connect(data.accessToken, {
        name: 'cool-room',
        audio: true,
        video: true
      });

console.log(room);
      this.setState({ room: room });
    } catch(err) {
      console.log(err);
    }
  }

  leaveRoom() {
    this.setState({ room: null });
  }

  updateIdentity(event) {
    this.setState({
      identity: event.target.value
    });
  }

  removePlaceholderText() {
    this.inputRef.current.placeholder = '';
  }

  render() {
    const disabled = this.state.identity === '' ? true : false;

    return (
      <RootStyle>
      <div id="video-app" >
        { 
          this.state.room === null
          ? <div style={{width:"100%",margin:"auto"}} className = "lobby">
              <input 
              className='video-inp'
                ref={this.inputRef} 
                value={this.state.identity} 
                onClick={this.removePlaceholderText} 
                onChange={this.updateIdentity} 
                placeholder="What's your name?"/> <br /> <br />
              <Button variant="contained" onClick={this.joinRoom}>Join Room</Button>
            </div>
          : <Room leaveRoom={this.leaveRoom} room={this.state.room} />
        }
      </div>
      </RootStyle>
    );
  }
}

export default VideoApp;
