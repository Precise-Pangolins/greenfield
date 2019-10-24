import counter from './example.js';
import multiply from './example2.js';
import { combineReducers } from 'redux';
import styles from '../reducers/overview-reducers/stylesReducer.js';

export default combineReducers({ counter, multiply, styles });
