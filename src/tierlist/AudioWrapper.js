import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import TierList from './TierList';
import { TierListContext, initialData } from './TierListContext';
import './tierlist-styles.css';

class AudioWrapper extends React.Component {
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