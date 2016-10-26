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
    //this should hit server API or itunes API, need to talk about this!
    // Would have to promisify this when async, using dummy data now.
    // Promise.all(data).done(results => {
    //   context.setState({
        // episodes: results.map(episode => episodes.push(episode))
      // });
    // });
    //in the meantime, using dummy data
    this.props.currentFeed.map(episode => this.state.episodeList.push({
      'title': episode.title,
      'description': episode.description,
      'duration': episode.duration
    }));
  }

  render() {
    return (
      <div style={styles.feedView}> {this.props.currentFeedTitle}
        {
          this.state.episodeList.map((episode, index) =>
            <FeedItemView key={index} episode = {episode}/>
          )
        }
      </div>
    );
  }

  requestPodcastData(id) {
    return $.ajax({
      url: `http://itunes.apple.com/lookup?id=${id}`,
      method: 'GET',
      dataType: 'JSONP'
    });
  }
}

const styles = {
  feedView: {
    background: 'orange'
  }
};

export default FeedView;