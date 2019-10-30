import React from 'react';

import OverviewContainer from '../src/redux/containers/OverviewContainers/mainOverviewContainer.js';
import state from '../src/redux/store/index.js';
import QAContainer from '../src/redux/containers/QAContainers/QAContainer.js';
import RatingsReviewsContainer from '../src/redux/containers/ReviewsContainers/getReviews';

const App = () => {
  return (
    <div>
      <header>
        <hr className='top-head-border' />
        <h1 className='company-name'>. We Are Noods .</h1>
        <hr />
        <h1 className='head-style'>. Just Plain You .</h1>
      </header>
      <OverviewContainer />
      <QAContainer />
      <RatingsReviewsContainer />
    </div>
  );
};

export default App;
