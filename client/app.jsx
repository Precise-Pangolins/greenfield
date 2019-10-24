import React from 'react';

import Overview from './components/overview-components/Overview.jsx';
import RatingsReviews from './components/rating-reviews/RatingsReviews.jsx';
import state from '../src/redux/store/index.js';

import getProdStyles from '../src/redux/actionCreators/overview-action-creators/productInfo.actionCreator.getStyles.js';
import getProdInfo from '../src/redux/actionCreators/overview-action-creators/productInfo.actionCreator.getInfo.js';
import getProdList from '../src/redux/actionCreators/overview-action-creators/productInfo.actionCreator.getList.js';
import postToCart from '../src/redux/actionCreators/overview-action-creators/productInfo.actionCreator.postToCart.js';

const resultStyle = getProdStyles(1);
const resultInfo = getProdInfo(1);
const resultList = getProdList();

const resultCart = postToCart(34567, 2);

const App = () => {
  resultCart(items => {
    console.log({ cart: items });
  });

  resultStyle(items => {
    console.log({ style: items });
  });

  resultInfo(items => {
    console.log({ info: items });
  });

  resultList(items => {
    console.log({ list: items });
  });

  return (
    <div>
      <Overview />
      <RatingsReviews />
    </div>
  );
};

export default App;
