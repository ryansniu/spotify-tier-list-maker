import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import TierList from './tierlist/TierList';
import { TierListContext, initialData } from './tierlist/TierListContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebar-styles.css';

ReactDOM.render(
  <TierListContext.Provider value = {initialData}>
    <Provider store={store}>
      <TierList/>
    </Provider>
  </TierListContext.Provider>,
  document.getElementById('root')
);
