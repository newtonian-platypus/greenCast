import React from 'react';
import SubscribedChannelItemView from './SubscribedChannelItemView.jsx';

class SubscribedChannelView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.subscriptions}>
        {this.props.subscriptions.map(channel =>
          <SubscribedChannelItemView channel={channel} />
        )}
      </div>
    );
  }
}

const styles = {
  subscriptions: {

  }
}

export default SubscribedChannelView;