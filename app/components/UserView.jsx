import React from 'react';
import SubscribedChannelView from './SubscribedChannelView';

class UserView extends React.Component {
  
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <span>UserView</span>
         <div>
           <SubscribedChannelView />
         </div> 
      </div>
    );
  }
}

export default UserView;
