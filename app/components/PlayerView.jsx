import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

let PlayerView = ({nowPlaying}) => (
  <div style={styles.playerStyle}>
    <ReactAudioPlayer src={nowPlaying}/>
  </div>
);

const styles = {
  playerStyle: {
  	position: 'fixed',
  	bottom: 0,
    width: '100%',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  }
};

export default PlayerView;