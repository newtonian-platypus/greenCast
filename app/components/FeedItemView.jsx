import React from 'react';

class FeedItemView extends React.Component {

  constructor(props) {
    super(props);
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

  render() {
    return (
      <div style={styles.cardStyle}>
        <div style = {styles.content}>
          <span style={styles.titleStyle}>{this.props.episode.title}</span>
          <span style={styles.descriptionStyle}>{this.shrinkDescription(this.props.episode.description)}</span>
          <span style={styles.durationStyle}>Duration: {this.timeEditor(this.props.episode.duration)}</span>
          <span style={styles.durationStyle}>{this.props.episode.url}</span>
        </div>
      </div>
    );
  }
};

const styles = {
  cardStyle: {
    marginBottom: '10px',
    background: '#BBCAD4',
    boxShadow: '4px 4px 5px #888888',
    border: '2px solid black',
    float: 'right',
    width: '550px',
    padding: '10px'
  },
  titleStyle: {
    float: 'left',
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'Droid Sans'
  },
  descriptionStyle: {
    float: 'left',
    fontSize: '16px',
    fontWeight: 'bold',
    fontFamily: 'Droid Sans'
  },
  durationStyle: {
    float: 'left',
    fontSize: '16px',
    fontFamily: 'Droid Sans'
  }
};

export default FeedItemView;
