import prodStylesSuccess from '../../actions/overview-actions/productInfo.actions.getStyles.js';
import axios from 'axios';

const apiUrl = 'http://18.223.1.30';

export const getProdStyles = id => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/products/${id}/styles`)
      .then(res => {
        console.log(res);
        dispatch(prodStylesSuccess(res.data));
      })
      .catch(err => {
        console.log('error getting product styles', err);
        throw err;
      });
  };
};

export default getProdStyles;
