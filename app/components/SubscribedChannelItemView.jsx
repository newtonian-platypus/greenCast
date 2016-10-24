import React from 'react';

class SubscribedChannelItemView extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props.channel);
  }

  render() {
    return (
      <div style={styles.cardStyle} data-rss={this.props.channel.rss} data-channelId={this.props.channel.id}>
        <div style={styles.artwork}>
          <img src={this.props.channel.artworkUrl100} />
        </div>
        <div style={styles.title}>
          <h3>{this.props.channel.name}</h3>
        </div>
      </div>
    );
  }
}

const styles = {
  cardStyle: {
    marginBottom: '4px',
    background: 'green'
  },
  artwork: {
    height: '100px',
  },
  title: {

  }
}

export default SubscribedChannelItemView;