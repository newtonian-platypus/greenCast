import React from 'react';
import SubscribedChannelItemView from './SubscribedChannelItemView.jsx';

class SubscribedChannelView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    this.props.subscriptions.map(x => console.log(x));
    return (
      <div>
         {this.props.subscriptions.map(show => {
           <SubscribedChannelItemView show={show} />
        })}
      </div>
    );
  }
}

export default SubscribedChannelView;