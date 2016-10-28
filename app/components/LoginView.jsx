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
          <div style={styles.info}>
            <div style={styles.title}>
              <center>
                <span>GreenCast</span>
              </center>
            </div>
            <div style={styles.description}>
              <center>
                <span>A podcast player for the web.</span>
              </center>
            </div>
          </div>
          <a href='/auth/github' style={styles.githubButton}>Login with GitHub <i className="fa fa-github" /></a>
        </div>
      </div>
    );
  }
}

const styles = {
  login: {
    position: 'absolute',
    margin: 'auto',
    width: '40%',
    height: '35%',
    top: 0,
    right: 0,
    bottom: 0,
    left: '55%',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    background: 'white',
    fontFamily: 'droid sans',
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
    padding: '8px 16px 8px 16px',
    width: '184px',
    position: 'absolute',
    top: '80%',
    left: '154px'
  },
  title: {
    paddingTop: '35px',
    fontSize: '45px'
  },
  description: {
    marginTop: '15px',
    fontSize: '20px',
    fontStyle: 'italic',
    paddingBottom: '25px'
  },
  info: {
    background: 'rgb(90, 199, 90)',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.2)',
    color: 'white'
  }
};

export default LoginView;