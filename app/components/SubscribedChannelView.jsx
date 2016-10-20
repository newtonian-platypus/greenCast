import React from 'react';
import SubscribedChannelItemView from './SubscribedChannelItemView.jsx';

class SubscribedChannelView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.subscriptions.map(channel =>
          <SubscribedChannelItemView channel={channel} />
        )}
      </div>
    );
  }
}

export default SubscribedChannelView;