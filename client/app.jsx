import React from "react";

import Overview from "./components/overview-components/Overview.jsx";
import RatingsReviews from "../src/redux/containers/ReviewsContainers/getReviews.js";
import state from "../src/redux/store/index.js";
import QABody from "./components/qanda-components/QABody.jsx";

import postToCart from "../src/redux/actionCreators/overview-action-creators/postToCart.js";

const resultCart = postToCart(34567, 2);

const App = () => {
  resultCart(items => {
    // console.log({ cart: items });
  });

  return (
    <div>
      <Overview />
      <QABody />
      <RatingsReviews />
    </div>
  );
};

export default App;
