import Redux from 'redux';

const getReviewsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_REVIEWS':
      return state.concat(action.reviews);
    default:
      return state;
  }
};

export default getReviewsReducer;
