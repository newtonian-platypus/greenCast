import React from 'react';

class FeedItemView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  shrinkDescription(desc) {
    let summary = desc + '';
    return summary.substring(0, 325) + '...';
  }

  //for formatting of podcast times
  timeEditor(time) {
    let mins = Math.floor(time / 60);
    let secs = time % 60;
    let hrs = Math.floor(time / 3600);
    mins = Math.floor((time % 3600) / 60);
    secs = time % 60;
    let podLength = '';
    if (hrs > 0) {
      podLength += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }
    podLength += '' + mins + ':' + (secs < 10 ? '0' : '');
    podLength += '' + secs;
    return podLength;
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
  }

  render() {
    let hover = this.state.hover ? styles.deepShadow : styles.shadow;
    return (
      <div style={Object.assign({}, styles.cardStyle, hover)} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>
        <div style = {styles.content}>
          <span>{this.props.episode.image ? <img src={this.props.episode.image} style={styles.image} /> : null}</span>
          <h3>{this.props.episode.title}</h3>
          <p style={styles.descriptionStyle}>{this.shrinkDescription(this.props.episode.description)}</p>
          <span style={styles.durationStyle}>Duration: {this.timeEditor(this.props.episode.duration)}</span>
          {this.props.episode.enclosure ? <span style={styles.durationStyle}>{this.props.episode.enclosure.url}</span> : null}
        </div>
      </div>
    );
  }
};

const styles = {
  cardStyle: {
    marginBottom: '15px',
    marginLeft: '16px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    width: '550px',
    padding: '10px',
  },
  descriptionStyle: {
    fontSize: '14px',
    marginBottom: '8px'
  },
  durationStyle: {
    fontSize: '12px',
  },
  image: {
    width: '550px',
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

export default FeedItemView;
