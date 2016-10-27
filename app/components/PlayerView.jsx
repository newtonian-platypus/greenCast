import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

let PlayerView = ({nowPlaying}) => (
  <div style={styles.playerStyle}>
    <ReactAudioPlayer src={nowPlaying} autoPlay/>
  </div>
);

const styles = {
  playerStyle: {
  	position: 'fixed',
  	bottom: 0,
    border: '2px solid black'
  }
};

export default PlayerView;