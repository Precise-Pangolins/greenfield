import React from "react";

import OverviewContainer from "../src/redux/containers/OverviewContainers/mainOverviewContainer.js";
import RatingsReviews from "./components/rating-reviews/RatingsReviews.jsx";
import state from "../src/redux/store/index.js";
import QAContainer from "../src/redux/containers/QAContainers/QAContainer.js";

const App = () => {
  return (
    <div>
      <OverviewContainer />
      <QAContainer />
      <RatingsReviews />
    </div>
  );
};

export default App;
