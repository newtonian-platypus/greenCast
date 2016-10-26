import React from 'react';

class NavView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.navBar}>
        <h1>Hello {this.props.username}</h1>
        <a href='/logout'>Logout</a>
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