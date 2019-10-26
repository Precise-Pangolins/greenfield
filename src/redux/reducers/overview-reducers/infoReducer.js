import Redux from 'redux';
import { emptyProduct } from './initialState.js';

const getInfoReducer = (state = emptyProduct, action) => {
  switch (action.type) {
    case 'FETCH_INFO':
      let obj = Object.assign({}, state, action.info);
      return obj;
    default:
      return state;
  }
};

export default getInfoReducer;
