import Redux from 'redux';
import { cart } from './initialState.js';
import * as OverviewActionTypes from '../../actions-types/overviewActionsTypes.js';

const setCartReducer = (state = cart, action) => {
  switch (action.type) {
    case OverviewActionTypes.POST_PRODUCT_TO_CART:
      return { ...state, loading: true };
    case OverviewActionTypes.POST_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        user_session: action.payload.user_session,
        product_id: action.payload.product_id
      };
    case OverviewActionTypes.POST_PRODUCT_TO_CART_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default setCartReducer;
