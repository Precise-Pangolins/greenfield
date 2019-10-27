import React from 'react';

import OverviewContainer from '../src/redux/containers/OverviewContainers/mainOverviewContainer.js';
import RatingsReviews from './components/rating-reviews/RatingsReviews.jsx';
import state from '../src/redux/store/index.js';
import QABody from './components/qanda-components/QABody.jsx';

// import postToCart from '../src/redux/apiCalls/overview-action-creators/postToCart.js';

// const resultCart = postToCart(34567, 2);

const App = () => {
  // resultCart(items => {
  //   console.log({ cart: items });
  // });

  return (
    <div>
      <OverviewContainer />
      <QABody />
      <RatingsReviews />
    </div>
  );
};

export default App;
