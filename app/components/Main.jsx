import React from 'react';
import NavView from './NavView.jsx';
import UserView from './UserView.jsx';
import FeedView from './FeedView.jsx';
import PlayerView from './PlayerView.jsx';
//to be replaced with live data
const stubChannels = require('../stubChannels');
const stubFeed = require('../stubFeed').feed;

class Main extends React.Component {

  constructor() {
    super();

    this.state = {
      subscriptions: [496893300, 447667314, 1066446588],
      //current feed will be refactored to be set by click,
      //defaulting to subcription 0 at this moment
      currentFeed: stubFeed.episodes,
      currentFeedTitle: stubFeed.title,
      //how to get an episode episode list from itunes?
      nowPlaying: 'https://dts.podtrac.com/redirect.mp3/dovetail.prxu.org/serial/d7f03a15-be26-4634-8884-5fadd404ad75/serial-s01-e01.mp3'
    };
  }

  unsubscribe(channelId) {
    console.log(channelId);
  }

  showEpisodes(feedUrl) {
    console.log(feedUrl);
  }

  render() {
    return (
      <div className="main-container">
         <NavView />
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
}

export default Main;
