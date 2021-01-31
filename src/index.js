import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import SidebarSearch from './sidebar/SidebarSearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebar-styles.css';

ReactDOM.render(
  <Provider store={store}>
    <SidebarSearch />
  </Provider>,
  document.getElementById('root')
);
