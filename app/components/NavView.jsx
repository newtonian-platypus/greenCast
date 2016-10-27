import React from 'react';
import Search from './SearchView.jsx';

class NavView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.navBar}>
        <h1 style={styles.greenCast}>greenCast</h1>
        <h2 style={styles.hello}>Welcome, {this.props.username}!</h2>
        <div style={styles.unsubscribe}>
          <button><a href='/logout'>Logout</a></button>
        </div>
          <Search handleSearchInputChange={this.props.handleSearchInputChange}/>
          { this.props.searching ? <button onClick={this.props.stopSearching}>Stop Searching</button> : null }
      </div>
    );
  }
}

const styles = {
  navBar: {
    width: '1500px',
    backgroundColor: '#8B9CB6',
    'margin-top': '-130px',
    'margin-left': '-40px',
    'border-bottom': '2px solid black'
  },
  greenCast: {
    paddingTop: '15px',
    paddingLeft: '250px',
    fontFamily: 'Amatic SC',
    fontSize: '130px'
  },
  hello: {
    paddingLeft: '700px',
    marginTop: '-115px',
    marginBottom: '-20px',
    fontFamily: 'Droid Sans'
  },
  unsubscribe: {
    paddingLeft: '60px',
    paddingBottom: '10px',
    marginTop: '-20px'
  }
}

export default NavView;