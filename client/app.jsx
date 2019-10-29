import React from "react";

import OverviewContainer from "../src/redux/containers/OverviewContainers/mainOverviewContainer.js";
import RatingsReviewsContainer from "../src/redux/containers/ReviewsContainers/getReviews";
import state from "../src/redux/store/index.js";
import QABody from "./components/qanda-components/QABody.jsx";
console.log(state.getState());

const App = () => {
  return (
    <div>
      <OverviewContainer />
      <QABody />
      <RatingsReviewsContainer />
    </div>
  );
};

export default App;
