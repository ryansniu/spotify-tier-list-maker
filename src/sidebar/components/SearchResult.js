import React from 'react';
import { Button } from 'react-bootstrap';
import TracksList from './TracksList';
import AlbumsList from './AlbumsList';
import ArtistsList from './ArtistsList';

const SearchResult = (props) => {
  const { loadMore, getInnerItems, result, setCategory, selectedCategory } = props;
  const categories = ['tracks', 'albums', 'artists'];
  
  return (
    <React.Fragment>
      <div className="search-buttons">
        {categories.map(category => (
          result[category].items?.length ? (
            <button
              key={category}
              className={`btn${selectedCategory === category ? ' active' : ''}`}
              onClick={() => setCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ) : null
        ))}
      </div>

      {categories.map(category => (
        <div key={category} className={selectedCategory === category ? '' : 'hide'}>
          {category === 'tracks' && <TracksList tracks={result[category]} />}
          {category === 'albums' && <AlbumsList albums={result[category]} getInnerItems={getInnerItems} />}
          {category === 'artists' && <ArtistsList artists={result[category]} getInnerItems={getInnerItems} />}
        </div>
      ))}

      {result[selectedCategory]?.next && (
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