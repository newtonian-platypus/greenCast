import React from 'react';
import SearchResultsItemView from './SearchResultsItemView.jsx';

class SearchResultsView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.search}>
      {
        this.props.searchResults.map(podcast => (
          <SearchResultsItemView podcast={podcast} subscribe={this.props.subscribe}/>
        ))
      }
      </div>
    );
  }
}

const styles = {
  search: {
    marginTop: '15px',
    display: 'flex',
    flexFlow: 'row wrap'
  }
}

export default SearchResultsView;