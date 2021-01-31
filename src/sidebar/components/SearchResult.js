import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import TracksList from './TracksList';
import AlbumsList from './AlbumsList';
import ArtistsList from './ArtistsList';
import PlayList from './PlayList';

const SearchResult = (props) => {
  const { loadMore, result, setCategory, selectedCategory } = props;
  const { tracks, albums, artists, playlist } = result;

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
        {!_.isEmpty(playlist.items) && (
          <button
            className={`${
              selectedCategory === 'playlist' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('playlist')}
          >
            PlayLists
          </button>
        )}
      </div>

      <div className={`${selectedCategory === 'tracks' ? '' : 'hide'}`}>
        {albums && <TracksList tracks={tracks} />}
      </div>
      <div className={`${selectedCategory === 'albums' ? '' : 'hide'}`}>
        {albums && <AlbumsList albums={albums} />}
      </div>
      <div className={`${selectedCategory === 'artists' ? '' : 'hide'}`}>
        {artists && <ArtistsList artists={artists} />}
      </div>
      <div className={`${selectedCategory === 'playlist' ? '' : 'hide'}`}>
        {playlist && <PlayList playlist={playlist} />}
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