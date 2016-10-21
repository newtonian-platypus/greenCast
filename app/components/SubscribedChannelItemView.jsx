import React from 'react';

class SubscribedChannelItemView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.channel.name}</h3>
        <p>{this.props.channel.rss}</p>
        <p>{this.props.channel.id}</p>
        <img src={this.props.channel.artworkUrl100} />
      </div>
    );
  }
}

export default SubscribedChannelItemView;