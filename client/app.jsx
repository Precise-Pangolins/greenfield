import React from "react";
import Overview from "./components/overview-components/Overview.jsx";
import state from "../src/redux/store/index.js";
import RatingsReviews from "./components/rating-reviews/RatingsReviews.jsx";

const App = () => {
  console.log(state.getState());
  return (
    <div>
      <Overview />
      <RatingsReviews />
    </div>
  );
};

export default App;
