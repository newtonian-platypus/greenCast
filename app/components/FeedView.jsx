import React from 'react';
import $ from 'jquery';
import FeedItemView from './FeedItemView.jsx';

class FeedView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      episodeList: []
    };
  }

  render() {
    if (this.state.episodeList.length === 0) {
      return (
        <div> Loading </div>
      );
    } else {
      return (
        <div style={styles.feedView}> {this.state.feedTitle}
          {
            this.state.episodeList.map((episode, index) =>
              <FeedItemView key={index} episode = {episode}/>
            )
          }
        </div>
      );
    }
  }

  componentDidMount() {
    const context = this;
    const data = this.requestFeedData(context.props.currentFeed);
    data.done(results => {
      context.setState({
        episodeList: results
      });
    });
  }


  componentDidUpdate(previousProps, previousState) {
    if (previousProps.currentFeed !== this.props.currentFeed) {
      const context = this;
      const data = this.requestFeedData(context.props.currentFeed);
      data.done(results => {
        context.setState({
          episodeList: results
        });
      });
    }
  }

  render() {
    return (
      <div style={styles.feedStyle}>
        <span>{this.props.currentFeedTitle}</span>
        {
          this.state.episodeList.map((episode, index) =>
            <FeedItemView key={index} episode = {episode} playThis={this.props.playThis}/>
          )
        }
      </div>
    );
  }

  //request feed from server
  requestFeedData(id) {
    return $.ajax({
      url: `/channel/${id}`,
      method: 'GET',
      dataType: 'JSON',
    });
  }

}

const styles = {
  feedStyle: {
    float: 'right',
    fontFamily: 'Droid Sans',
    width: '610px',
    height: '550px',
    marginRight: '10%',
    marginTop: '15px',
    overflow: 'auto'
  }
};

export default FeedView;
