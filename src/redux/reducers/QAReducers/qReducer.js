// import Redux from "redux";
// import LOAD_ALL_QUESTIONS from "../../actions/QAActions/loadAs";

// const initialState = {
//   questions: []
// };

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
 