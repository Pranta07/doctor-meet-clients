import './VideoApp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faMicrophoneSlash, faVideo, faVideoSlash } from '@fortawesome/free-solid-svg-icons'; 
function AVControl(props) {
  let icon;

  if (props.trackOff) {
    icon = props.type === 'audio' ? faMicrophoneSlash : faVideoSlash;
  } else {
     icon = props.type === 'audio' ? faMicrophone : faVideo;
  }
  return (
    <div className="avControl">
      <FontAwesomeIcon icon={icon} onClick={() => props.toggleTrack()} />
    </div>
  );
  
}

export default AVControl;
