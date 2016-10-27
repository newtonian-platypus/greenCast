import React from 'react';

class SubscribedChannelItemView extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div style={styles.cardStyle}>
        <div style={styles.content} onClick={this.props.showEpisodes.bind(this, this.props.channel.feedUrl)}>
          <div style={styles.artbox}>
            <img style={styles.artwork} src={this.props.channel.artworkUrl100} />
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
    marginBottom: '12px',
    background: '#B4B4B4',
    height: '130px',
    'box-shadow': '6px 6px 5px #888888',
    border: '2px solid black',
    position: 'relative',
    marginBottom: '-5px'

  },
  artwork: {
    height: '100px',
    border: '2px solid black',
    float: 'left'
  },
  artbox: {
    padding: '10px'
  },
  title: {
    fontFamily: 'Droid Sans',
    fontSize: '20px',
    paddingRight: '15px',
    'font-weight': 'bold',
    float: 'right',
    position: 'relative'
  },
  unsubscribe: {
    padding: '10px',
    paddingLeft: '20px',
    float: 'right'
  }
};

export default SubscribedChannelItemView;
