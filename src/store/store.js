import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import tracksReducer from '../sidebar/reducers/tracks';
import albumsReducer from '../sidebar/reducers/albums';
import artistsReducer from '../sidebar/reducers/artists';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    tracks: tracksReducer,
    albums: albumsReducer,
    artists: artistsReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
