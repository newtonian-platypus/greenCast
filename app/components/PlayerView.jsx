import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class PlayerView extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.rap.audioEl)
  }

  render() {
    return (
      <div style={styles.playerStyle}>
        <ReactAudioPlayer src={this.props.nowPlaying} ref={c => { this.rap = c }} />
      </div>
    );
  }
}

const styles = {
  playerStyle: {
  	position: 'fixed',
  	bottom: 0,
    width: '100%',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  }
};

export default PlayerView;