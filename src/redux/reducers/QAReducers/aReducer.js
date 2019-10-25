const answersListReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_ALL_ANSWERS":
      let obj = Object.assign([], state, action.answers);
      return obj;
    default:
      return state;
  }
};

export default answersListReducer;
