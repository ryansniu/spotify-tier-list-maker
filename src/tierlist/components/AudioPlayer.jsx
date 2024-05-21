import { useRef, useEffect, useState } from 'react';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonText, setButtonText] = useState('P');

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = src;
  }, [src]);

  useEffect(() => {
    const audio = audioRef.current;
    // resume if the previous audio played is the same one
    isPlaying ? audio.play() : audio.pause(); audio.currentTime = 0;
  }, [isPlaying]);

  const toggleAudio = () => {
    setIsPlaying(p => !p);
    setButtonText(p => (p === 'P' ? 'S' : 'P'));
  };

  return (
    <div>
      <audio ref={audioRef}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={toggleAudio}>{buttonText}</button>
    </div>
  );
};

export default AudioPlayer;