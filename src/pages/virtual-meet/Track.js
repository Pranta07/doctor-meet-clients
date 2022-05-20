import React, {Component} from 'react';
import './VideoApp.scss';
import AVControl from './AVControl';
class Track extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      trackOff: false
    }
  
    this.toggleTrack = this.toggleTrack.bind(this);
  
  }

  componentDidMount() {
    if (this.props.track !== null) {
      const child = this.props.track.attach();
      this.ref.current.classList.add(this.props.track.kind);
      this.ref.current.appendChild(child)
    }
  }
  toggleTrack() {
    if (this.state.trackOff) {
      this.props.track.enable();
    } else {
      this.props.track.disable()
    }
  
    this.setState({
      trackOff: !this.state.trackOff
    });
  }
  
  render() {
    return (
      <div className="track" ref={this.ref}>
        {
        this.props.local && this.props.track
        ? <AVControl toggleTrack={this.toggleTrack} trackOff={this.state.trackOff} type={this.props.track.kind}/>
        : ''
      }
      </div> 
    )
  }
}

export default Track;
