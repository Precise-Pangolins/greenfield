import React from "react";
import Overview from "./components/overview-components/Overview.jsx";
import state from "../src/redux/store/index.js";
import RatingsReviews from "./components/rating-reviews/RatingsReviews.jsx";
import getReviews from "../src/redux/actionCreators/getReviews/index.js";
getReviews(2);

const App = () => {
  return (
    <div>
      <Overview />
      <RatingsReviews />
    </div>
  );
};

export default App;
