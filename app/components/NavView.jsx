import React from 'react';
import Search from './SearchView.jsx';

class NavView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.navBar}>
        <h1>Hello {this.props.username}</h1>
        <a href='/logout'>Logout</a>
        <Search handleSearchInputChange={this.props.handleSearchInputChange}/>
        { this.props.searching ? <button onClick={this.props.stopSearching}>Stop Searching</button> : null }
      </div>
    );
  }
}

const styles = {
  navBar: {
    width: '100%',
    backgroundColor: 'yellow'
  }
}

export default NavView;