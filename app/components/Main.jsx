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
const stubFeed = require('../stubFeed').feed;

class Main extends React.Component {

  constructor() {
    super();

    this.state = {
      searching: false,
      searchResults: null,
      subscriptions: [],
      //current feed will be refactored to be set by click,
      //defaulting to subcription 0 at this moment
      currentFeed: stubFeed.episodes,
      currentFeedTitle: stubFeed.title,
      //how to get an episode episode list from itunes?
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
    });
  }

  unsubscribe(channelId) {
    // $.ajax({
    //   url: `/user/${window.username}/subscriptions`,
    //   method: 'POST',
    //   data: {channel: channelId}
    // }).done(() => {
    //   console.log('unsubscribed from', channelId);
    // });

    //need to add unsubscribe route
    console.log(channelId);
  }

  showEpisodes(feedUrl) {
    console.log(feedUrl);
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
    if(window.username) {
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
            <FeedView currentFeed={this.state.currentFeed} currentFeedTitle ={this.state.currentFeedTitle}/>
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
          />
        </div>
      );
    } else {
      return (
        <div className="main-container">
          <LoginView />
        </div>
      );
    }
  }
}

export default Main;
