import React from 'react';
import NavView from './NavView.jsx';
import UserView from './UserView.jsx';
import FeedView from './FeedView.jsx';
import PlayerView from './PlayerView.jsx';
const stubChannels = require('../stubChannels');

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      subscriptions: [496893300, 447667314, 1066446588]
    };
  }

  render() {
    return (
      <div className="main-container">
         <NavView />
         <UserView subscriptions={this.state.subscriptions}/>
         <FeedView />
         <PlayerView />
      </div>
    );
  }
}

export default Main;
