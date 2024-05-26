import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import play from '../../tierlist/imgs/play.svg';
import pause from '../../tierlist/imgs/pause.svg';
import './audio-bars.css';

const AudioPlayer = ({ id, src, getCurrentAudioSrc, setCurrentAudio }) => {
  return (
    <div>
      <button className="item-buttons audio-btn" style={{border: "none", borderRadius: "0"}}
      onClick={(e) => {
        e.stopPropagation();
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
    </div>
  );
};

export default AudioPlayer;