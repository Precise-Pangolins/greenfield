import counter from './example.js';
import multiply from './example2.js';
import { combineReducers } from 'redux';

import styles from '../reducers/overview-reducers/stylesReducer.js';
import list from '../reducers/overview-reducers/listReducer.js';
import info from '../reducers/overview-reducers/infoReducer.js';
import questions from '../reducers/QAReducers/qReducer';
import reviews from '../reducers/ReviewReducers/getReviews.js';

export default combineReducers({
  counter,
  multiply,
  styles,
  reviews,
  list,
  info,
  questions
});
