const getTwoMoreQsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_TWO_MORE_QS":
      return state.concat(action.questions);
    default:
      return state;
  }
};

export default getTwoMoreQsReducer;
