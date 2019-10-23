const POST_CART = 'POST_CART';
const postToCartSuccess = data => {
  return {
    type: POST_CART,
    payload: 'Successfully Posted New Item to Cart'
  };
};

export default postToCartSuccess;
