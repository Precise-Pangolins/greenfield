import React from "react";
import AnswersList from "../qanda-components/AnswersList.jsx";
import AnswersListContainer from "../../../src/redux/containers/QAContainers/AnswersListContainer.js";

const QuestionEntry = question => {
  console.log("question in entry", question.question);
  return (
    <div>
      {" "}
      <strong>Q:</strong> {question.question.question_body}
      <AnswersListContainer />
      <p>
        by {question.question.asker_name}, {question.question.question_date} |
        Helpful? <span>Yes</span> ({question.question.question_helpfulness}) |{" "}
        <span>Report</span>
      </p>
    </div>
  );
};

export default QuestionEntry;
