import Redux from "redux";
import LOAD_ALL_QUESTIONS from "../../actions/QAActions/qActions";

const initialState = {
  questions: []
};

export function questionsListReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_ALL_QUESTIONS":
      let obj = Object.assign([], state, action.questions);
      return obj;
    default:
      return state;
  }
}
