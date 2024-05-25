import React from 'react';

export const initialAudio = {
  data: {
    src: null,
    isPlaying: false
  },
  setCurrentAudio: (src) => {},
  getCurrentAudio: () => {}
}

export const AudioContext = React.createContext(initialAudio);