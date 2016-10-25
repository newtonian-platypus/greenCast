import React from 'react';

class SubscribedChannelItemView extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div style={styles.cardStyle}>
        <div style={styles.content} onClick={this.props.showEpisodes.bind(this, this.props.channel.feedUrl)}>
          <div style={styles.artwork}>
            <img src={this.props.channel.artworkUrl100} />
          </div>
          <div style={styles.title}>
            <span>{this.props.channel.collectionName}</span>
          </div>
        </div>
        <div style={styles.unsubscribe}>
          <button onClick={this.props.unsubscribe.bind(this, this.props.channel.collectionId)}>Unsubscribe</button>
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