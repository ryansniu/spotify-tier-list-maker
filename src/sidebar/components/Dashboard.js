import React, { useState } from 'react';
import {
  initiateGetResult,
  initiateLoadMoreTracks,
  initiateLoadMoreAlbums,
  initiateLoadMoreArtists
} from '../actions/result';
import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import SearchForm from './SearchForm';
import Header from './Header';
import Loader from './Loader';

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = [props.selectedCategory, props.updateCategory];
  const { isValidSession, refreshSession } = props;

  const handleSearch = async (searchTerm) => {
    setIsLoading(true);
    if (!isValidSession()) {
      try { await refreshSession(); } 
      catch(error) { console.log(error); }
    }
    props.dispatch(initiateGetResult(searchTerm)).then(() => {
      setIsLoading(false);
    });
  };

  const loadMore = async (type) => {
    const { dispatch, tracks, albums, artists } = props;
    setIsLoading(true);
    if (!isValidSession()) {
      try { await refreshSession(); }
      catch(error) { console.log(error); }
    }
    switch (type) {
      case 'tracks':
        await dispatch(initiateLoadMoreTracks(tracks.next));
        break;
      case 'albums':
        await dispatch(initiateLoadMoreAlbums(albums.next));
        break;
      case 'artists':
        await dispatch(initiateLoadMoreArtists(artists.next));
        break;
      default:
    }
    setIsLoading(false);
  };

  const setCategory = (category) => { setSelectedCategory(category); };

  const { tracks, albums, artists } = props;
  const result = { tracks, albums, artists };
  
  return (
    <React.Fragment>
      <div>
        <Header />
        <SearchForm handleSearch={handleSearch} />
        <Loader show={isLoading}>Loading...</Loader>
        <SearchResult
          result={result}
          loadMore={loadMore}
          setCategory={setCategory}
          selectedCategory={selectedCategory}
        />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    tracks: state.tracks,
    albums: state.albums,
    artists: state.artists
  };
};

export default connect(mapStateToProps)(Dashboard);