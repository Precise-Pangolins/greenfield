const questionsListReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_ALL_QUESTIONS":
      let obj = Object.assign([], state, action.questions);
      return obj;
    default:
      return state;
  }
};

export default questionsListReducer;
