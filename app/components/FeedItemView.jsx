import React from 'react';

class FeedItemView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style ={styles.cardStyle}>
        <div style = {styles.content}>
          <span>{this.props.episode.image}</span>
          <span>{this.props.episode.title}</span>
          <span>{this.props.episode.description}</span>
          <span>{this.props.episode.duration}</span>
        </div>
      </div>
    );
  }
}

const styles = {
  cardStyle: {
    marginBottom: '4px',
    background: 'green'
  },
  artwork: {
    height: '100px'
  },
  content: {
    background: 'orange'
  },
};

export default FeedItemView;