import AnswersListContainer from "../../../src/redux/containers/QAContainers/AnswersListContainer.js";
import React from "react";

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
