import React from 'react';
import SubscribedChannelView from './SubscribedChannelView.jsx';
const UserView = (props) => {
  return (
    <div>
      <div style={styles.userStyle}>
        <SubscribedChannelView
          subscriptions={props.subscriptions}
          unsubscribe={props.unsubscribe}
          showEpisodes={props.showEpisodes}
        />
      </div>
    </div>
  );
}

const styles = {
  userStyle: {
    width: '300px',
    float: 'left',
    paddingTop: '15px'
  }
};

export default UserView;