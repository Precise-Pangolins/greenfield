// import FETCH_INFO from './productInfo.actions.types';

const FETCH_INFO = 'FETCH_INFO';

export const prodInfoSuccess = data => {
  return {
    type: FETCH_INFO,
    payload: {
      name: data.name,
      slogan: data.slogan,
      description: data.description,
      category: data.category,
      price: data.default_price, //string
      features: data.features //array
    }
  };
};

export default prodInfoSuccess;
