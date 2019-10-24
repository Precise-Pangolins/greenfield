import Redux from "redux";

const getReviewsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_REVIEWS":
      console.log(action.reviews);
      return state.concat(action.reviews);
    default:
      return state;
  }
};

export default getReviewsReducer;
