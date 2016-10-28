import React from 'react';
import NavView from './NavView.jsx';
import UserView from './UserView.jsx';
import FeedView from './FeedView.jsx';
import PlayerView from './PlayerView.jsx';
import LoginView from './LoginView.jsx';
import SearchResultsView from './SearchResultsView.jsx';
import $ from 'jquery';
//to be replaced with live data
const stubChannels = require('../stubChannels');

class Main extends React.Component {

  constructor() {
    super();

    this.state = {
      searching: false,
      searchResults: null,
      subscriptions: [],
      //current feed will be refactored to be set by click,
      //or we should default to subscription[0] see below
      currentFeed: null,
      nowPlaying: 'https://dts.podtrac.com/redirect.mp3/dovetail.prxu.org/serial/d7f03a15-be26-4634-8884-5fadd404ad75/serial-s01-e01.mp3'
    };
  }

  subscribe(channelId) {
    $.ajax({
      url: `/user/${window.username}/subscriptions`,
      method: 'POST',
      data: {channel: channelId}
    }).done(() => {
      console.log('subscribed to', channelId);
      this.refreshSubscriptions();
    });
  }

  unsubscribe(channelId) {
    $.ajax({
      url: `/user/${window.username}/subscriptions`,
      method: 'DELETE',
      data: {channel: channelId}
    }).done(() => {
      console.log('unsubscribed from', channelId);
      this.refreshSubscriptions();
    });
  }

  showEpisodes(channelId) {
    this.setState({currentFeed: channelId});
    console.log(this.state.currentFeed);
  }

  getPodcasts(query) {
    let search = this.requestPodcastData(query).done(data => {
      this.setState({searchResults: data.results, searching: true});
    });
  }

  stopSearching() {
    this.setState({searching: false});
  }

  requestPodcastData(query) {
    return $.ajax({
      url: `https://itunes.apple.com/search?term=${query}&media=podcast`,
      method: 'GET',
      dataType: 'JSONP'
    });
  }

  componentDidMount() {
    this.refreshSubscriptions();
  }

  refreshSubscriptions() {
    if (window.username) {
      $.ajax({
        url: `/user/${window.username}/subscriptions`,
        method: 'GET',
        dataType: 'JSON'
      }).done(data => {
        this.setState({subscriptions: data});

      });
    }
  }

  render() {
    if (window.username) {
      if(!this.state.searching) {
        return (
          <div className="main-container">
            <NavView
              username={window.username}
              handleSearchInputChange={this.getPodcasts.bind(this)}
              stopSearching={this.stopSearching.bind(this)}
              searching={this.state.searching}
            />
            <UserView
              subscriptions={this.state.subscriptions}
              unsubscribe={this.unsubscribe.bind(this)}
              showEpisodes={this.showEpisodes.bind(this)}
            />
            {this.state.currentFeed ? <FeedView currentFeed={this.state.currentFeed} /> : null}
            <PlayerView nowPlaying={this.state.nowPlaying}/>
          </div>
        );
      }
      return (
        <div className="main-container">
          <NavView
            username={window.username}
            handleSearchInputChange={this.getPodcasts.bind(this)}
            stopSearching={this.stopSearching.bind(this)}
            searching = {this.state.searching}
          />
          <SearchResultsView
            searchResults={this.state.searchResults}
            subscribe={this.subscribe.bind(this)}
            subscriptions={this.state.subscriptions}
          />
        </div>
      );
    } else {
      return (
        <div>
          <LoginView />
        </div>
      );
    }
  }
};

const styles = {
  cardStyle: {
    width: '900px',
    'height': '1500px',
    position: 'relative',
    'background': 'lightgrey',
    padding: '20px',
    paddingRight: '150px',
    marginTop: '-8px',
    marginLeft: '-8px'
  },
  background: {
    width: '1500px',
    height: '4000px',
    'background': 'lightgrey'
  }
};


export default Main;

