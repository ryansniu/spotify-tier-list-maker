import React, { useState, useRef, useEffect } from 'react';

export const AudioContext = React.createContext();

export const AudioProvider = ({ children }) => {
  const [audioId, setAudioId] = useState(null);
  const [audioSrc, setAudioSrc] = useState(null);
  const audioRef = useRef(null);

  const setCurrentAudio = (newId, newSrc) => {
    if (audioRef.current.src === newSrc) audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
    else {
      if (newSrc) {
        audioRef.current.src = newSrc;
        audioRef.current.play();
      }
      else audioRef.current.pause();
    }
    setAudioSrc(newSrc);
    setAudioId(newId);
  }

  const getCurrentAudioSrc = () => {
    return audioSrc;
  };
  const getCurrentAudioId = () => {
    return audioId;
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    const handleAudioEnd = () => setAudioSrc(null);
    audioElement.addEventListener('ended', handleAudioEnd);
    return () => audioElement.removeEventListener('ended', handleAudioEnd);
  }, []);

  return (
    <>
      <audio ref={audioRef}>
        {audioSrc && (
          <>
            <source src={audioSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </>
        )}
      </audio>
      <AudioContext.Provider value={{ audioSrc, setCurrentAudio, getCurrentAudioId, getCurrentAudioSrc }}>
        {children}
      </AudioContext.Provider>
    </>
  );
};