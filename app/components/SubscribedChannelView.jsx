import React from 'react';
import Promise from 'bluebird';
import $ from 'jquery';
import SubscribedChannelItemView from './SubscribedChannelItemView.jsx';

class SubscribedChannelView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      requests: []
    };
  }

  componentWillMount() {
    const context = this;
    const requests = this.props.subscriptions.map(id => this.requestPodcastData(id));
    Promise.all(requests).done(results => {
      context.setState({
        requests: results.map(data => data.results[0])
      });
    });
  }

  render() {
    return (
      <div style={styles.subscriptions}>
        {
          this.state.requests.map(channel =>
            <SubscribedChannelItemView channel={channel} />
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
  subscriptions: {

  }
}

export default SubscribedChannelView;