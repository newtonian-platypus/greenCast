import React from 'react';
import FeedItemView from './FeedItemView';

class FeedView extends React.Component {
  
  constructor(props) {
    super();
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
