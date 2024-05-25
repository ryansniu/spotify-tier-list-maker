import React from 'react';
import ReactDOM from 'react-dom';
import AudioWrapper from './tierlist/AudioWrapper';
import { AudioContext, initialAudio } from './tierlist/AudioContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebar-styles.css';

ReactDOM.render(
  <AudioContext.Provider value = {initialAudio}>
    <AudioWrapper/>
  </AudioContext.Provider>,
  document.getElementById('root')
);
