import React from 'react';
import SearchResultsItemView from './SearchResultsItemView.jsx';

class SearchResultsView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      {
        this.props.searchResults.map(podcast => (
          <SearchResultsItemView podcast={podcast} subscribe={this.props.subscribe}/>
        ))
      }
      </div>
    );
  }
}

export default SearchResultsView;