import Redux from "redux";

const getReviewsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_REVIEWS":
      return Object.assign([], state, action.reviews);
    default:
      return state;
  }
};

export default getReviewsReducer;
