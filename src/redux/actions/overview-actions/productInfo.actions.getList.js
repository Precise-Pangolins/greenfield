// import FETCH_LIST from './productInfo.actions.types';

const FETCH_LIST = 'FETCH_LIST';
export const getProdListSuccess = data => {
  return {
    type: FETCH_LIST,
    payload: {
      productList: data //array
    }
  };
};

export default getProdListSuccess;
