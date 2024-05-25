import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import TierList from './TierList';
import { TierListContext, initialData } from './TierListContext';
import { AudioContext } from './AudioContext';
import './tierlist-styles.css';

class AudioWrapper extends React.Component {
  static contextType = AudioContext;
  state = this.context.data;

  componentDidMount() {
    this.context.setCurrentAudio = (newSrc) => {
      console.log("setting audio to: ", newSrc)
      const {src, isPlaying} = this.state;
      console.log("isPlaying: ", isPlaying, "src: ", src)
      console.log("src: ", src, "newSrc: ", newSrc)
      let newIsPlaying = src === newSrc ? !isPlaying : true;
      console.log(newIsPlaying ? "playing audio" : "stopped audio");
      this.setState({
          src: newSrc,
          isPlaying: newIsPlaying
      })
    }
    this.context.getCurrentAudio = () => this.state.isPlaying ? this.state.src : null;
  }

  render() {
    return (
        <TierListContext.Provider value = {initialData}>
          <Provider store={store}>
              <TierList/>
          </Provider>
        </TierListContext.Provider>
    );
  }
}

export default AudioWrapper