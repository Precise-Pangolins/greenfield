import Redux from 'redux';
import { emptyProduct } from './initialState.js';
import * as OverviewActionTypes from '../../actions-types/overviewActionsTypes.js';

const getInfoReducer = (state = emptyProduct, action) => {
  switch (action.type) {
    case OverviewActionTypes.FETCH_PRODUCT_INFO: {
      return { ...state, loading: true };
    }
    case OverviewActionTypes.FETCH_PRODUCT_INFO_SUCCESS: {
      return { ...state, loading: false, info: action.payload };
    }
    case OverviewActionTypes.FETCH_PRODUCT_INFO_FAIL: {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
};

export default getInfoReducer;
