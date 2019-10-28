import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index.js';
import { composeWithDevTools } from 'redux-devtools-extension';
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// action
// init request// make an api call
// send back the response to the store
