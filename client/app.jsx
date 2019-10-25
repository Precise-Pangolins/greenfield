import React from "react";

import Overview from "./components/overview-components/Overview.jsx";
import RatingsReviews from "./components/rating-reviews/RatingsReviews.jsx";
import state from "../src/redux/store/index.js";
import QAContainer from "../src/redux/containers/QAContainers/QAContainer";

import postToCart from "../src/redux/actionCreators/overview-action-creators/postToCart.js";

const resultCart = postToCart(34567, 2);

const App = () => {
  resultCart(items => {
    console.log({ cart: items });
  });

  return (
    <div>
      <Overview />
      <QAContainer />
      <RatingsReviews />
    </div>
  );
};

export default App;
