import React from "react";
import Overview from "./components/overview-components/Overview.jsx";
import state from "../src/redux/store/index.js";
import QABody from "./components/qanda-components/QABody.jsx";


import RatingsReviews from "./components/rating-reviews/RatingsReviews.jsx";

const App = () => {
  return (
    <div>
      <Overview />
      <QABody />
      <RatingsReviews />
    </div>
  );
};

export default App;
