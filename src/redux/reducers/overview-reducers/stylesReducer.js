import Redux from 'redux';

import { emptyProduct } from './initialState.js';

const getStylesReducer = (state = emptyProduct.styles, action) => {
  switch (action.type) {
    case 'FETCH_STYLES':
      let obj = Object.assign([], state, action.styles);
      return obj;
    default:
      return state;
  }
};

export default getStylesReducer;
