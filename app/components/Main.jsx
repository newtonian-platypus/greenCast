import React from 'react';
import NavView from './NavView.jsx';
import UserView from './UserView.jsx';
import FeedView from './FeedView.jsx';
import PlayerView from './PlayerView.jsx';
const stubChannels = require('../stubChannels');

class Main extends React.Component {

  constructor() {
    super();

    this.state = {
      subscriptions: [496893300, 447667314, 1066446588]
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
         <FeedView />
         <PlayerView />
      </div>
    );
  }
}

export default Main;
