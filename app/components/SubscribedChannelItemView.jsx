import React from 'react';

class SubscribedChannelItemView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.cardStyle} data-rss={this.props.channel.feedUrl} data-channelid={this.props.channel.collectionId}>
        <div style={styles.content}>
          <div style={styles.artwork}>
            <img src={this.props.channel.artworkUrl100} />
          </div>
          <div style={styles.title}>
            <span>{this.props.channel.collectionName}</span>
          </div>
        </div>
        <div style={styles.unsubscribe}>
          <button onClick={console.log('clicked')}>Unsubscribe</button>
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
    height: '100px'
  },
  title: {

  },
  content: {
    background: 'pink'
  },
  unsubscribe: {
    background: 'blue'
  }
}

export default SubscribedChannelItemView;