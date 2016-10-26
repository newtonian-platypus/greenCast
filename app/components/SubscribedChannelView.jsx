import React from 'react';
import Promise from 'bluebird';
import $ from 'jquery';
import SubscribedChannelItemView from './SubscribedChannelItemView.jsx';

class SubscribedChannelView extends React.Component {

  constructor() {
    super();

    this.state = {
      requests: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.subscriptions != this.props.subscriptions) {
      console.log('didUpdate');
      const context = this;
      const requests = this.props.subscriptions.map(id => this.requestPodcastData(id));
      Promise.all(requests).done(results => {
        context.setState({
          requests: results.map(data => data.results[0])
        });
      });
    }
  }

  componentDidMount() {
    console.log('didMount');
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
          this.state.requests.map((channel,index) =>
            <SubscribedChannelItemView
              key = {index}
              channel={channel}
              unsubscribe={this.props.unsubscribe}
              showEpisodes={this.props.showEpisodes}
            />
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