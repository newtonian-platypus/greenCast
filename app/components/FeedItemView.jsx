import React from 'react';

class FeedItemView extends React.Component {

  constructor(props) {
    super(props);
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
        <div style = {styles.content}>
          <span>{this.props.episode.title} </span>
          <span>{this.timeEditor(this.props.episode.duration)}</span>
        </div>
    );
  }
}

const styles = {
  content: {
    background: 'orange'
  },
};

export default FeedItemView;