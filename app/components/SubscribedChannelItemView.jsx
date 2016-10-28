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
          <i style={styles.unsubscribe} onClick={this.props.unsubscribe.bind(this, this.props.channel.collectionId)} className="fa fa-times-circle" ariaHidden="true"></i>
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
    top: '-10px',
    left: '-10px',
    position: 'absolute',
    color: 'rgb(251,73,71)',
    fontSize: '20px',
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
