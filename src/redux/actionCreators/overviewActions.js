import axios from 'axios';

import {
  fetchProductStylesSuccess,
  fetchProductListSuccess,
  fetchProductInfoSuccess,
  fetchProductInfo,
  fetchProductInfoFail,
  fetchProductStyles,
  fetchProductStylesFail,
  postProductToCart,
  postProductToCartSuccess,
  postProductToCartFail
} from '../actions/overviewActionCreators.js';

const apiUrl = 'http://18.223.1.30';

export const getProdInfo = id => {
  return dispatch => {
    dispatch(fetchProductInfo());
    return axios
      .get(`${apiUrl}/products/${id}`)
      .then(({ data }) => {
        dispatch(fetchProductInfoSuccess(data));
      })
      .catch(err => {
        dispatch(fetchProductInfoFail());
        console.log('error getting product info', err);
        throw err;
      });
  };
};

// export const getProdList = () => {
//   return dispatch => {
//     return axios
//       .get(`${apiUrl}/products/list`)
//       .then(({ data }) => {
//         dispatch(fetchProductListSuccess(data));
//       })
//       .catch(err => {
//         console.log('error getting product list', err);
//         throw err;
//       });
//   };
// };

export const getProdStyles = id => {
  return dispatch => {
    dispatch(fetchProductStyles()); //initiates action types )turn on loading sign
    return axios
      .get(`${apiUrl}/products/${id}/styles`)
      .then(({ data }) => {
        dispatch(fetchProductStylesSuccess(data));
      })
      .catch(err => {
        dispatch(fetchProductStylesFail());
        console.log('error getting product styles', err);
        throw err;
      });
  };
};

export const postToCart = (userSession, productId) => {
  return dispatch => {
    // dispatch i have init the request ; this would update the state with loading: true
    dispatch(postProductToCart());
    return axios
      .post(`${apiUrl}/cart`, {
        user_session: userSession,
        product_id: productId
      })
      .then(res => {
        // dispatch data loaded; loading : false,
        dispatch(postToCartSuccess(res.data));
      })
      .catch(err => {
        // dispatch data loaded; loading : false,
        console.log('error posting to cart', err);
        throw err;
      });
  };
};
