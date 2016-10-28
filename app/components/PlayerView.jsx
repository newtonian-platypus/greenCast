import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Waveform from './Waveform.jsx';

class PlayerView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.playerStyle}>
        <Waveform src={this.props.nowPlaying}/>
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
  }
};

export default PlayerView;