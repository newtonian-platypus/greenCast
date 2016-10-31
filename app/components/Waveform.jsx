import React from 'react';
import ReactDOM from 'react-dom';
import Wavesurfer from 'react-wavesurfer';

class Waveform extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      playing: false,
      pos: 0
    };
    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
    this.handleReady = this.handleReady.bind(this);
  }
  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }
  handlePosChange(e) {
    this.setState({
      pos: e.originalArgs[0]
    });
  }
  handleReady() {
    this.setState({
      playing: true,
      loading: false
    });
  }

  render() {
    return (
      <div>
        {
          this.state.loading ?
          <div style={styles.info}><span>Loading...</span></div> :
          <div style={styles.info}><span> {this.props.nowPlayingData}</span></div>
          // see feed update for title handling example...it's in State alright...
        }
        { this.state.playing ?
          <i style={styles.play} onClick={this.handleTogglePlay} className="fa fa-pause" ariaHidden="true"></i> :
          <i style={styles.play} onClick={this.handleTogglePlay} className="fa fa-play" ariaHidden="true"></i>
        }
        <div style={styles.player}>
          <Wavesurfer
            audioFile={`/api/audio/${this.props.src}`}
            pos={this.state.pos}
            onPosChange={this.handlePosChange}
            playing={this.state.playing}
            onReady={this.handleReady}
            options={{
              height: 45,
              waveColor: '#ddd',
              progressColor: 'rgb(251,73,71)',
              cursorColor: '#999'
            }}
          />
        </div>
      </div>
      );
  }
}

const styles = {
  player: {
    marginLeft: '66px'
  },
  play: {
    position: 'absolute',
    left: '21px',
    bottom: '15px',
    color: 'rgb(251,73,71)',
    fontSize: '30px',
    cursor: 'pointer'
  },
  info: {
    fontFamily: 'Droid Sans',
    marginLeft: '15px',
    marginTop: '7px',
    marginBottom: '7px'
  }
};

export default Waveform;