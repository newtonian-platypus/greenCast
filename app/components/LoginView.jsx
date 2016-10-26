import React from 'react';

class LoginView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div style={styles.loginCard}>
          <a href='/auth/github'>Login with Github</a>
        </div>
    );
  }
}

const styles = {
  loginCard: {
    position: 'absolute',
    margin: 'auto',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '300px',
    height: '300px',
    backgroundColor: '#ccc',
    borderRadius: '2px',
  }
}

export default LoginView;