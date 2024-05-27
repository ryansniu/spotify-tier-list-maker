import {
  SET_ALBUMS,
  ADD_ALBUMS,
  SET_ARTISTS,
  ADD_ARTISTS,
  SET_TRACKS,
  ADD_TRACKS
} from '../utils/constants';
import { get } from '../utils/api';

export const setTracks = (tracks) => ({
  type: SET_TRACKS,
  tracks
});
export const addTracks = (tracks) => ({
  type: ADD_TRACKS,
  tracks
});

export const setAlbums = (albums) => ({
  type: SET_ALBUMS,
  albums
});
export const addAlbums = (albums) => ({
  type: ADD_ALBUMS,
  albums
});

export const setArtists = (artists) => ({
  type: SET_ARTISTS,
  artists
});
export const addArtists = (artists) => ({
  type: ADD_ARTISTS,
  artists
});

let searchTracks, searchAlbums;
const resetSearchSets = () => {
  searchTracks = new Set();
  searchAlbums = new Set();
}

export const initiateGetResult = (searchTerm) => {
  resetSearchSets();
  return async (dispatch) => {
    try {
      let API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(searchTerm)}&type=track,album,artist&limit=24`;
      API_URL += `&market=${sessionStorage.getItem('regionLocked')}`;
      const result = await get(API_URL);
      const { tracks, albums, artists } = result;
      let newTracks = tracks, newAlbums = albums;
      let trackItems = [], albumItems = [];

      newTracks.items.forEach(function(item) {
        let key = item.name;
        item.artists.forEach(function(artist){
          key += "" + artist.id;
        });
        if(!searchTracks.has(key)) {
          searchTracks.add(key);
          trackItems.push(item);
        }
      });
      newTracks.items = trackItems;
      dispatch(setTracks(newTracks));

      newAlbums.items.forEach(function(item) {
        let key = item.name;
        item.artists.forEach(function(artist){
          key += "" + artist.id;
        });
        if(!searchAlbums.has(key) && item.total_tracks > 1) {
          searchAlbums.add(key);
          albumItems.push(item);
        }
      });
      newAlbums.items = albumItems;
      dispatch(setAlbums(newAlbums));

      return dispatch(setArtists(artists));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const initiateLoadMoreTracks = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      let newTracks = result.tracks;
      let trackItems = [];

      newTracks.items.forEach(function(item) {
        let key = item.name;
        item.artists.forEach(function(artist){
          key += "" + artist.id;
        });
        if(!searchTracks.has(key)) {
          searchTracks.add(key);
          trackItems.push(item);
        }
      });
      newTracks.items = trackItems;

      return dispatch(addTracks(newTracks));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const initiateLoadMoreAlbums = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      let newAlbums = result.albums;
      let albumItems = [];

      newAlbums.items.forEach(function(item) {
        let key = item.name;
        item.artists.forEach(function(artist){
          key += "" + artist.id;
        });
        if(!searchAlbums.has(key) && item.total_tracks > 1) {
          searchAlbums.add(key);
          albumItems.push(item);
        }
      });
      newAlbums.items = albumItems;

      return dispatch(addAlbums(newAlbums));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const initiateLoadMoreArtists = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addArtists(result.artists));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const getMultipleItems = async (id, typeFrom, itemType) => {
  let albumSet = new Set();
  try {
    let allItems = [];
    let API_URL = `https://api.spotify.com/v1/${typeFrom}s/${encodeURIComponent(id)}/${itemType}s?limit=50`;
    if(typeFrom === 'artist') API_URL += `&include_groups=album,single`;
    API_URL += `&market=${sessionStorage.getItem('regionLocked')}`;
    do {
      const result = await get(API_URL);
      const { items, next } = result;
      if(typeFrom === 'artist') {
        let newItems = [];
        items.forEach(function(item) {
          if(!albumSet.has(item.name) && item.total_tracks > 1) {
            albumSet.add(item.name);
            newItems.push(item);
          }
        });
        allItems = allItems.concat(newItems);
      }
      else allItems = allItems.concat(items);
      API_URL = next;
    } while (API_URL);
    return allItems;
  } catch (error) {
    console.log('error', error);
  }
};

export const getPlaylistItems = async (playlistID) => {
  let playlistName = null;
  let allItems = [];
  try {
    let API_URL = `https://api.spotify.com/v1/playlists/${encodeURIComponent(playlistID)}`;
    let firstURL = true;
    do {
      const result = await get(API_URL);
      if(result === undefined || result.tracks === undefined) break;
      if (firstURL) playlistName = result.name;
      const { items, next } = firstURL ? result.tracks : result;
      firstURL = false;
      allItems = allItems.concat(items);
      API_URL = next;
    } while (API_URL);
  } catch (error) {
    console.log('error', error);
  }
  return {
    name: playlistName,
    result: allItems
  };
};