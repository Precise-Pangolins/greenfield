import React from "react";
import Overview from "./components/overview-components/Overview.jsx";
import state from "../src/redux/store/index.js";
import getAllAnswers from "../src/redux/actionCreators/QAActionCreators/getAllAnswers";
import createNewQuestion from "../src/redux/actionCreators/QAActionCreators/createNewQ";
import getAllQuestions from "../src/redux/actionCreators/QAActionCreators/getAllQuestions";
// let allAnswers = getAllAnswers(1);
// allAnswers(answers => {
//   console.log(answers);
// });

let allQuestions = getAllQuestions(1);
allQuestions(questions => {
  console.log("questions in app.jsx:", questions);
});

const App = () => {
  console.log(state.getState());
  return (
    <div>
      <Overview />
    </div>
  );
};

export default App;
