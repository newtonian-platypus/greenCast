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
          <a href='/auth/github' style={styles.githubButton}>Login with GitHub <i className="fa fa-github" /></a>
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
  topPodcasts: {
    width: '50%',
    height: '100%',
    marginTop: '25px',
    marginLeft: '25px',
    display: 'flex',
    flexFlow: 'row wrap'
  },
  githubButton: {
    fontSize: '20px',
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'droid sans',
    padding: '8px 16px 8px 16px',
    width: '184px',
    position: 'absolute',
    top: '80%',
    left: '154px'
  }
};

export default LoginView;