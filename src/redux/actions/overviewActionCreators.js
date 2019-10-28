import * as OverviewActionsTypes from '../actions-types/overviewActionsTypes';

export const fetchProductInfo = () => ({
  type: OverviewActionsTypes.FETCH_PRODUCT_INFO
});

export const fetchProductStyles = () => ({
  type: OverviewActionsTypes.FETCH_PRODUCT_STYLES
});

export const fetchProductList = () => ({
  type: OverviewActionsTypes.FETCH_PRODUCT_LIST
});

export const fetchProductInfoSuccess = data => ({
  type: OverviewActionsTypes.FETCH_PRODUCT_INFO_SUCCESS,
  payload: data
});

export const fetchProductListSuccess = data => ({
  type: OverviewActionsTypes.FETCH_PRODUCT_LIST_SUCCESS,
  payload: data
});

export const fetchProductStylesSuccess = data => ({
  type: OverviewActionsTypes.FETCH_PRODUCT_STYLES_SUCCESS,
  payload: data
});

export const fetchProductInfoFail = () => ({
  type: OverviewActionsTypes.FETCH_PRODUCT_INFO_FAIL,
  payload: data
});

export const fetchProductListFail = () => ({
  type: OverviewActionsTypes.FETCH_PRODUCT_LIST_FAIL,
  payload: data
});

export const fetchProductStylesFail = () => ({
  type: OverviewActionsTypes.FETCH_PRODUCT_STYLES_FAIL,
  payload: data
});

// component calls an action using actionCreator
// store would ask the apiCall (side effects that we've defined) to make the  HTTP API Call
// when we get a result in response, the apiCall would want to update the store with that result
// for that it would call another actionCreator
