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
         <div style={styles.userStyle}>
           <SubscribedChannelView
              subscriptions={this.props.subscriptions}
              unsubscribe={this.props.unsubscribe}
              showEpisodes={this.props.showEpisodes}
           />
         </div>
      </div>
    );
  }
}

const styles = {
  userStyle: {
    width: '400px'
  }
}

export default UserView;