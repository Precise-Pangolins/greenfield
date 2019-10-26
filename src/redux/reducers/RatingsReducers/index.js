import Redux from "redux";

const getRatingsReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_META_DATA":
      console.log("action in reducer", action);
      return Object.assign({}, state, action.metaData);
    default:
      return state;
  }
};

export default getRatingsReducer;
