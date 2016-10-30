import React from 'react';

class LoginItemView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
    console.log(this.state.hover);
  }

  render() {
    let hover = this.state.hover ? styles.deepShadow : styles.shadow;
    return (
      <div
        style={Object.assign({}, styles.cardStyle, hover)}
        onMouseEnter={this.toggleHover.bind(this)}
        onMouseLeave={this.toggleHover.bind(this)}
        onClick={this.props.highlightLogin}
      >
        <div style={styles.content}>
          <div>
            <img style={styles.artwork} src={this.props.podcast['im:image'][2]._} />
          </div>
          <div style={styles.title}>
            <span>{this.props.podcast['im:name'][0].length >= 17 ? this.props.podcast['im:name'][0].substring(0, 17) + ' ...' : this.props.podcast['im:name'][0]}</span>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  cardStyle: {
    marginBottom: '15px',
    marginLeft: '15px',
    height: '95px',
    width: '300px',
    position: 'relative',
    background: 'white'
  },
  artwork: {
    height: '95px',
    width: '95px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    position: 'absolute',
    top: 0,
    left: 0
  },
  content: {
    width: '300px',
    height: '95px'
  },
  title: {
    fontFamily: 'Droid Sans',
    fontSize: '20px',
    fontWeight: 'bold',
    left: '115px',
    top: '38px',
    position: 'absolute'
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

export default LoginItemView;