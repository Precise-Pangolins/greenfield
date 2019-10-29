import Redux from 'redux';
import { emptyProduct } from './initialState.js';
import * as OverviewActionTypes from '../../actions-types/overviewActionsTypes.js';

const getStylesReducer = (state = {}, action) => {
  switch (action.type) {
    case OverviewActionTypes.FETCH_PRODUCT_STYLES:
      return { ...state, loading: true };
    case OverviewActionTypes.FETCH_PRODUCT_STYLES_SUCCESS:
      return { ...state, loading: false, data: action.payload.results };
    case OverviewActionTypes.FETCH_PRODUCT_STYLES_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default getStylesReducer;
