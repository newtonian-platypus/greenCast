import React from 'react';
import $ from 'jquery';
import LoginItemView from './LoginItemView.jsx';

class LoginView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      podcasts: null
    }
  }

  componentWillMount() {
    const contest = this;
    const request = this.getTopPodcasts();
    request.done((podcasts) => {
      contest.setState({
        podcasts: podcasts.feed.entry
      });
    });
  }

  getTopPodcasts() {
    return $.ajax({
      url: '/api/toppodcasts',
      method: 'GET',
      dataType: 'JSON'
    });
  }

  render() {
    console.log(this.state.podcasts);
    return (
      <div>
        <div style={styles.topPodcasts}>
          {
            this.state.podcasts ?
              this.state.podcasts.map(podcast => <LoginItemView podcast={podcast}/> )
              : null
          }
        </div>
        <div style={styles.login}>
          <a href='/auth/github'>Login with Github</a>
        </div>
      </div>
    );
  }
}

const styles = {
  login: {
    position: 'absolute',
    width: '40%',
    height: '90%',
    top: '35px',
    right: 0,
    bottom: 0,
    left: '55%',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    background: 'white'
  },
  loginCard: {
    position: 'absolute',
    margin: 'auto',
    top: 0,
    right: 0,
    bottom: 0,
    left: '45%',
    width: '300px',
    height: '300px',
    backgroundColor: '#ccc',
    borderRadius: '2px',
  },
  topPodcasts: {
    width: '50%',
    height: '100%',
    marginTop: '25px',
    marginLeft: '25px',
    display: 'flex',
    flexFlow: 'row wrap'
  }
};

export default LoginView;