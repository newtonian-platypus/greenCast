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

  componentWillMount() {
    const context = this;
    const requests = this.requestFeedData(context.props.currentFeed);
    console.log(requests);
    // Promise.all(requests).done(results => {
    //   context.setState({
    //     requests: results.map(data => data.results[0])
    //   });
    // });
  }


  render() {
    return (
      <div style={styles.feedView}> Title for Feed Channel Here
        {
          this.state.episodeList.map((episode, index) =>
            <FeedItemView key={index} episode = {episode}/>
          )
        }
      </div>
    );
  }

  requestFeedData(id) {
    return $.ajax({
      url: `http://localhost.com/getFeed/${id}`,
      method: 'POST',
      dataType: 'JSONP',
    });
  }

  // requestPodcastData(id) {
  //   return $.ajax({
  //     url: `http://itunes.apple.com/lookup?id=${id}`,
  //     method: 'GET',
  //     dataType: 'JSONP'
  //   });
  // }
}

const styles = {
  feedView: {
    background: 'orange'
  }
};

export default FeedView;