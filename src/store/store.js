import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import tracksReducer from '../sidebar/reducers/tracks';
import albumsReducer from '../sidebar/reducers/albums';
import artistsReducer from '../sidebar/reducers/artists';
import playlistReducer from '../sidebar/reducers/playlist';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    tracks: tracksReducer,
    albums: albumsReducer,
    artists: artistsReducer,
    playlist: playlistReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
