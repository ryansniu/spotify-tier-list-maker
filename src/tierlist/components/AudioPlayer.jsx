import { Image } from 'react-bootstrap';
import play from '../../tierlist/imgs/play.svg';
import pause from '../../tierlist/imgs/pause.svg';
import link from '../../tierlist/imgs/external-link.svg';
import './audio-bars.css';

const AudioPlayer = ({ id, src, ext_link, getCurrentAudioSrc, setCurrentAudio }) => {
  return (
    <div className="audio-player-bg" style={getCurrentAudioSrc() && getCurrentAudioSrc() === src ? {backgroundColor: '#0008'} : {}}>
      {
        src ? (
          <button className="item-buttons audio-btn" style={{border: "none", borderRadius: "0"}}
            onClick={(e) => {
              e.stopPropagation();
              console.log("hmm")
              if (getCurrentAudioSrc() === src) setCurrentAudio(null, null);
              else setCurrentAudio(id, src);
          }}>
            {
              getCurrentAudioSrc() === src ? (
                <>
                  <div className="icon-bars">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                  <Image className="item-buttons-icon audio-icon" onDragStart={e => e.preventDefault()} src={pause} fluid alt="pause track"/>
                </>
              ) : (
                <Image className="item-buttons-icon" onDragStart={e => e.preventDefault()} src={play} fluid alt="play track"/>
              )
            }
          </button>
        ) : (
          <a
            className="card-img-link"
            target="_blank"
            href={ext_link}
            rel="noopener noreferrer"
            onDragStart={e => e.preventDefault()}
            onClick={e => e.stopPropagation()}
          >
            <Image className="item-buttons-icon" onDragStart={e => e.preventDefault()} src={link} fluid alt=""/>
          </a>
        )
      }
    </div>
  );
};

export default AudioPlayer;