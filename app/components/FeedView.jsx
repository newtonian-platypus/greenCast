import React from 'react';
import FeedItemView from './FeedItemView.jsx';

class FeedView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>FeedView</span>
         <div>
           <FeedItemView />
         </div>
      </div>
    );
  }
}

export default FeedView;