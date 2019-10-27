import Redux from 'redux';
import emptyProduct from './initialState.js';
import * as OverviewActionTypes from '../../actions-types/overviewActionsTypes.js';

const getStylesReducer = (state = emptyProduct.styles, action) => {
  switch (action.type) {
    case OverviewActionTypes.FETCH_PRODUCT_STYLES:
      return { ...state, loading: true };
    case OverviewActionTypes.FETCH_PRODUCT_STYLES_SUCCESS:
      console.log('reducer style', action.payload);
      return { ...state, loading: false, styles: action.payload.results };
    case OverviewActionTypes.FETCH_PRODUCT_STYLES_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default getStylesReducer;
