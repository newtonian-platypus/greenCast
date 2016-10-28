import React from 'react';

class SubscribedChannelItemView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
  }

  render() {
    let hover = this.state.hover ? styles.deepShadow : styles.shadow;
    return (
      <div style={Object.assign({}, styles.cardStyle, hover)} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>
        <div style={styles.content} onClick={this.props.showEpisodes.bind(this, this.props.channel.collectionId)}>
          <div>
            <img style={styles.artwork} src={this.props.channel.artworkUrl100} />
          </div>
          <div style={styles.title}>
            <span>{this.props.channel.collectionName.length > 24 ? this.props.channel.collectionName.substring(0, 24) + ' ...' : this.props.channel.collectionName}</span>
          </div>
        </div>
        <div>
          <a style={styles.unsubscribe} onClick={this.props.unsubscribe.bind(this, this.props.channel.collectionId)}></a>
        </div>
      </div>
    );
  }
}

const styles = {
  cardStyle: {
    marginBottom: '15px',
    height: '100px',
    width: '400px',
    position: 'relative'
  },
  artwork: {
    height: '100px',
    width: '100px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    position: 'absolute',
    top: 0,
    left: 0
  },
  content: {
    width: '400px',
    height: '100px'
  },
  title: {
    fontFamily: 'Droid Sans',
    fontSize: '20px',
    fontWeight: 'bold',
    left: '115px',
    top: '40px',
    position: 'absolute'
  },
  unsubscribe: {
    top: '-6px',
    left: '-6px',
    position: 'absolute',
    border: 'none',
    WebkitBorderRadius: '12',
    msBorderRadius: '12',
    borderRadius: '12px',
    WebkitBoxShadow: '0px 1px 2px #666666',
    msBoxShadow: '0px 1px 2px #666666',
    boxShadow: '0px 1px 2px #666666',
    background: '#eb6161',
    padding: '8px 8px 8px 8px',
    fontSize: '10px',
    cursor: 'pointer'
  },
  shadow: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.4s'
  },
  deepShadow: {
    boxShadow: '0 4px 16px 0 rgba(0,0,0,0.2)',
    transition: '0.4s'
  }
};

export default SubscribedChannelItemView;
