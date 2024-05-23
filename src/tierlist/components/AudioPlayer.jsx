import { useRef, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import play from '../../tierlist/imgs/play.svg';
import pause from '../../tierlist/imgs/pause.svg';
import './audio-bars.css';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = src;
    audio.volume = 0.25;
    audio.onended = () => setIsPlaying(false);
  }, [src]);

  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play();
    }
    else {
      audio.pause();
    }
    // audio.currentTime = 0;
  }, [isPlaying]);

  const toggleAudio = () => {
    setIsPlaying(p => !p);
  };

  return (
    <div>
      <audio ref={audioRef}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button className="item-buttons audio-btn" style={{border: "none", borderRadius: "0"}}
      onClick={(e) => {
        e.stopPropagation();
        toggleAudio();
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