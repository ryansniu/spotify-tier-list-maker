import { useRef, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import play from '../../tierlist/imgs/play.svg';
import pause from '../../tierlist/imgs/pause.svg';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = src;
    audio.volume = 0.25;
  }, [src]);

  useEffect(() => {
    const audio = audioRef.current;
    // resume if the previous audio played is the same one
    isPlaying ? audio.play() : audio.pause(); audio.currentTime = 0;
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
      <button className="item-buttons" style={{border: "none", borderRadius: "0"}}
      onClick={(e) => {
        e.stopPropagation();
        toggleAudio();
      }}>
        <Image className="item-buttons-icon" onDragStart={e => e.preventDefault()} src={isPlaying ? pause : play} fluid alt={`${isPlaying ? 'pause' : 'play'} track`}/>
      </button>
    </div>
  );
};

export default AudioPlayer;