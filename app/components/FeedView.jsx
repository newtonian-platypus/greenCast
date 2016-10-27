import React from 'react';
import Promise from 'bluebird';
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
    if (this.state.episodeList.length === 0 && this.props.subscriptions === undefined) {
      return (
        <div> </div>
      );
    } 
    if (this.state.episodeList.length === 0) {
      return (
        <div> Loading </div>
      );
    } else {
      return (
        <div style={styles.feedView}>
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
    if (this.props.currentFeed !== null) {
      const data = this.requestFeedData(context.props.currentFeed);
      data.done(results => {
        context.setState({
          episodeList: results
        });
      });
    }
  } 

  componentDidUpdate(previousProps, previousState) {
    if (this.props.currentFeed !== null) {
      if (previousProps !== this.props || previousState !== this.state) {
        const context = this;
        const data = this.requestFeedData(context.props.currentFeed);
        data.done(results => {
          context.setState({
            episodeList: this.state.episodeList 
          });
        });
      } 
    }
  }
  
  //request feed from server
  requestFeedData(id) {
    return $.ajax({
      url: `http://localhost:3000/channel/${id}`,
      method: 'GET',
      dataType: 'JSON',
    });
  }

}

const styles = {
  feedStyle: {
    'padding-top': '15px',
    'font-weight': 'bold',
    fontSize: '35px',
    float: 'right',
    paddingBottom: '10px',
    paddingRight: '10px',
    fontFamily: 'Days One'
  }
};

export default FeedView;
