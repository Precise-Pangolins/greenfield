// import FETCH_STYLES from './productInfo.actions.types';

const FETCH_STYLES = 'FETCH_STYLES';
export const prodStylesSuccess = data => {
  return {
    type: FETCH_STYLES,
    payload: {
      results: data.results //array. Each object contains name, sale price, photos, size inventory
    }
  };
};

export default prodStylesSuccess;
