import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class PlayerView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.playerStyle}>
        <ReactAudioPlayer
          src={this.props.nowPlaying}
          autoPlay="true"
        />
        <span style={styles.info}>
          {this.props.nowPlayingTitle}
        </span>
      </div>
    );
  }
}

const styles = {
  playerStyle: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    background: 'white',
    boxShadow: '0 -2px 4px 0 rgba(0,0,0,0.2)',
  },
  info: {
    position: 'absolute',
    top: '8px',
    fontFamily: 'Droid Sans',
    marginLeft: '35px',
    marginBottom: '7px',
  }
};

export default PlayerView;