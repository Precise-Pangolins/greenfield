export function answersListReducer(state = [], action) {
  switch (action.type) {
    case "LOAD_ALL_ANSWERS":
      let obj = Object.assign([], state, action.questions.answers);
      return obj;
    default:
      return state;
  }
}
