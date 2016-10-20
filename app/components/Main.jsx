import React from 'react';
import NavView from './NavView';
import UserView from './UserView';
import FeedView from './FeedView';
import PlayerView from './PlayerView';


class Main extends React.Component {
  
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="main-container">
         <NavView />
         <UserView />
         <FeedView />
         <PlayerView />
      </div>
    );
  }
}

export default Main;
