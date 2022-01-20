import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import TracksList from './TracksList';
import AlbumsList from './AlbumsList';
import ArtistsList from './ArtistsList';

const SearchResult = (props) => {
  const { loadMore, getInnerItems, result, setCategory, selectedCategory } = props;
  const { tracks, albums, artists } = result;
  
  return (
    <React.Fragment>
      <div className="search-buttons">
        {!_.isEmpty(tracks.items) && (
          <button
            className={`${
              selectedCategory === 'tracks' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('tracks')}
          >
            Songs
          </button>
        )}
        {!_.isEmpty(albums.items) && (
          <button
            className={`${
              selectedCategory === 'albums' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('albums')}
          >
            Albums
          </button>
        )}
        {!_.isEmpty(artists.items) && (
          <button
            className={`${
              selectedCategory === 'artists' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('artists')}
          >
            Artists
          </button>
        )}
      </div>

      <div className={`${selectedCategory === 'tracks' ? '' : 'hide'}`}>
        {albums && <TracksList tracks={tracks} />}
      </div>
      <div className={`${selectedCategory === 'albums' ? '' : 'hide'}`}>
        {albums && <AlbumsList albums={albums} getInnerItems={getInnerItems} />}
      </div>
      <div className={`${selectedCategory === 'artists' ? '' : 'hide'}`}>
        {artists && <ArtistsList artists={artists} getInnerItems={getInnerItems} />}
      </div>

      {!_.isEmpty(result[selectedCategory]) &&
       !_.isEmpty(result[selectedCategory].next) && (
        <div className="load-more">
          <Button variant="info" type="button" onClick={() => loadMore(selectedCategory)}>
            Load More
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};

export default SearchResult;