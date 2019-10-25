import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import '../src/styles.css';
import { Provider } from 'react-redux';
import store from '../src/redux/store/index.js';

var mountNode = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode
);
