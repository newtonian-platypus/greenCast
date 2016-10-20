import React from 'react';

class SubscribedChannelItemView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.show);
    return (
      <div>
        <span>SubscribedChannelView</span>
      </div>
    );
  }
}

export default SubscribedChannelItemView;