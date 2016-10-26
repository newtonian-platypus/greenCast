import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

let PlayerView = ({nowPlaying}) => (
  <div>
    <ReactAudioPlayer src={nowPlaying} autoPlay/>
  </div>
);

export default PlayerView;