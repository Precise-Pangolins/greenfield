import React from 'react';
import Overview from './components/overview-components/Overview.jsx';
import state from '../src/redux/store/index.js';

import getProdStyles from '../src/redux/actionCreators/overview-action-creators/productInfo.actionCreator.getStyles.js';
import getProdInfo from '../src/redux/actionCreators/overview-action-creators/productInfo.actionCreator.getInfo.js';
import getProdList from '../src/redux/actionCreators/overview-action-creators/productInfo.actionCreator.getList.js';

const resultStyle = getProdStyles(1);
const resultInfo = getProdInfo(1);
const resultList = getProdList();

const App = () => {
  resultStyle(items => {
    console.log({ style: items });
  });

  resultInfo(items => {
    console.log({ info: items });
  });

  resultList(items => {
    console.log({ list: items });
  });

  console.log(state.getState());
  return (
    <div>
      <Overview />
    </div>
  );
};

export default App;
