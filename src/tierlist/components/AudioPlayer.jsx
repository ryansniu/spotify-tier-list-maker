import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import play from '../../tierlist/imgs/play.svg';
import pause from '../../tierlist/imgs/pause.svg';
import './audio-bars.css';

const AudioPlayer = ({ src, getCurrentAudio, setCurrentAudio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    console.log("poop");
    setIsPlaying(getCurrentAudio() === src);
  }, [src]);

  return (
    <div>
      <button className="item-buttons audio-btn" style={{border: "none", borderRadius: "0"}}
      onClick={(e) => {
        e.stopPropagation();
        // doesnt work the first time for some reason????
        setCurrentAudio(src);
        setIsPlaying(getCurrentAudio() === src ? !isPlaying : true);
      }}>
        {
          isPlaying ? (
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
    </div>
  );
};

export default AudioPlayer;