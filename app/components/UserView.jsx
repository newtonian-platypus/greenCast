import React from 'react';
import SubscribedChannelView from './SubscribedChannelView.jsx';

class UserView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>UserView</span>
         <div>
           <SubscribedChannelView subscriptions={this.props.subscriptions}/>
         </div>
      </div>
    );
  }
}

export default UserView;