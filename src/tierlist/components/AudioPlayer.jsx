import { useRef, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { TierListContext } from '../TierListContext';
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
    audio.ontimeupdate = () => {
      if (audio.currentTime === 0.0001) {
        setIsPlaying(false);
        audio.currentTime = 0;
      }
    }
  }, [src]);

  useEffect(() => {
    const audio = audioRef.current;
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  return (
    <TierListContext.Consumer>
      {({getCurrentAudio, setCurrentAudio}) => (
        <div>
          <audio ref={audioRef}>
            <source src={src} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <button className="item-buttons audio-btn" style={{border: "none", borderRadius: "0"}}
          onClick={(e) => {
            e.stopPropagation();
            const currentAudio = getCurrentAudio();
            if(currentAudio && currentAudio !== audioRef.current) {
              currentAudio.currentTime = 0.0001;
            }
            setCurrentAudio(audioRef.current);
            setIsPlaying(p => !p);
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
      )}
    </TierListContext.Consumer>
    
  );
};

export default AudioPlayer;