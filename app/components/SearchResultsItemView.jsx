import React from 'react';

const SearchResultsItemView = ({podcast, subscribe}) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <img src={podcast.artworkUrl100} />
          </div>
          <div>
            <span>{podcast.collectionName}</span>
          </div>
        </div>
        <div>
          <button onClick={subscribe.bind(this, podcast.collectionId)}>subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default SearchResultsItemView;