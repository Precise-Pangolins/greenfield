// import POST_CART from './productInfo.actions.types';

const POST_CART = 'POST_CART';
export const postToCartSuccess = data => {
  return {
    type: POST_CART,
    payload: {
      results: data.results //need to adjust for post
    }
  };
};

export default postToCartSuccess;
