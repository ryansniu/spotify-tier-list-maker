import React, { useState } from 'react';
import {
  initiateGetResult,
  initiateLoadMoreTracks,
  initiateLoadMoreAlbums,
  initiateLoadMoreArtists,
  getMultipleItems
} from '../actions/result';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import SearchResult from './SearchResult';
import SearchForm from './SearchForm';
import Loader from './Loader';

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = [props.selectedCategory, props.updateCategory];

  const handleSearch = async (searchTerm) => {
    setIsLoading(true);
    props.dispatch(initiateGetResult(searchTerm)).then(() => {
      setIsLoading(false);
    });
  };

  const loadMore = async (type) => {
    const { dispatch, tracks, albums, artists } = props;
    setIsLoading(true);
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

  const getInnerItems = async (id, typeFrom, itemType) => {
    setIsLoading(true);
    let result = await getMultipleItems(id, typeFrom, itemType);
    setIsLoading(false);
    return result;
  }

  const setCategory = (category) => { setSelectedCategory(category); };

  const { tracks, albums, artists } = props;
  const result = { tracks, albums, artists };
  
  return (
    <React.Fragment>
      <div>
        <SearchForm handleSearch={handleSearch} />
        <Loader show={isLoading}>
          <Spinner animation="border" role="status" style={{marginRight: '0.5rem'}}/>
          Loading...
        </Loader>
        <SearchResult
          result={result}
          loadMore={loadMore}
          getInnerItems={getInnerItems}
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