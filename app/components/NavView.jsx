import React from 'react';
import Search from './SearchView.jsx';

class NavView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.navBar}>
        <span style={styles.greenCast}>greenCast</span>
        <a style={styles.logout} href='/logout'>Logout  <i className="fa fa-sign-out" ariaHidden="true"></i></a>
        <div style={styles.search}>
          <Search handleSearchInputChange={this.props.handleSearchInputChange}/>
        </div>
        { this.props.searching ? <button style={styles.stopSearch} onClick={this.props.stopSearching}>Stop Searching</button> : null }
      </div>
    );
  }
}

const styles = {
  navBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '50px',
    background: 'rgb(90, 199, 90)',
  },
  greenCast: {
    position: 'absolute',
    top: 0,
    left: '50%',
    fontFamily: 'Amatic SC',
    fontSize: '40px',
    color: 'white',
    marginLeft: '-80px'
  },
  hello: {
    paddingLeft: '700px',
    fontFamily: 'Droid Sans'
  },
  search: {
    position: 'absolute',
    left: '5%',
    top: '0',
    marginTop: '12px',
    fontFamily: 'droid sans',
    textDecoration: 'none',
    color: 'white'
  },
  logout: {
    position: 'absolute',
    left: '90%',
    top: '0',
    marginTop: '15px',
    fontFamily: 'droid sans',
    textDecoration: 'none',
    color: 'white'
  },
  stopSearch: {
    position: 'absolute',
    left: '25%',
    top: 0,
    marginTop: '15px',
    fontFamily: 'droid sans',
    textDecoration: 'none',
    background: 'rgb(90, 199, 90)',
    color: 'white',
    height: '20px',
    fontSize: '15px',
    border: '0px',
    cursor: 'pointer'
  }
}

export default NavView;