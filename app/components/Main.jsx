import React from 'react';
import NavView from './NavView.jsx';
import UserView from './UserView.jsx';
import FeedView from './FeedView.jsx';
import PlayerView from './PlayerView.jsx';
const stubData = require('../stubData');

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      subscriptions: stubData.shows
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
