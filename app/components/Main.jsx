import React from 'react';
import NavView from './NavView.jsx';
import UserView from './UserView.jsx';
import FeedView from './FeedView.jsx';
import PlayerView from './PlayerView.jsx';


class Main extends React.Component {

  constructor(props) {
    super(props);
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