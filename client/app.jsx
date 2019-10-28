import React from "react";

import OverviewContainer from "../src/redux/containers/OverviewContainers/mainOverviewContainer.js";
import state from "../src/redux/store/index.js";
import QAContainer from "../src/redux/containers/QAContainers/QAContainer.js";
import RatingsReviewsContainer from "../src/redux/containers/ReviewsContainers/getReviews";

const App = () => {
  return (
    <div>
      <OverviewContainer />
      <QAContainer />
      <RatingsReviewsContainer />
    </div>
  );
};

export default App;
