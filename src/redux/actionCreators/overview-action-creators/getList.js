import getProdListSuccess from '../../actions/overview-actions/getList.js';
import axios from 'axios';

const apiUrl = 'http://18.223.1.30';

export const getProdList = () => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/products/list`)
      .then(res => {
        dispatch(getProdListSuccess(res.data));
      })
      .catch(err => {
        console.log('error getting product list', err);
        throw err;
      });
  };
};

export default getProdList;
