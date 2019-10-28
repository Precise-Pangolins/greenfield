import React from "react";


import OverviewContainer from '../src/redux/containers/OverviewContainers/mainOverviewContainer.js';
import RatingsReviews from './components/rating-reviews/RatingsReviews.jsx';
import state from '../src/redux/store/index.js';
import QABody from './components/qanda-components/QABody.jsx';


const App = () => {

  return (
    <div>
      <OverviewContainer />
      <QABody />
      <RatingsReviews />
    </div>
  );
};

export default App;
