import React from "react";
import AnswersList from "./AnswersList.jsx";

const QuestionEntry = ({ question, answers }) => {
  return (
    <div class="questionEntry">
      {" "}
      <strong>Q:</strong> {question.question_body}
      <AnswersList answers={answers} />
      <p>
        by {question.asker_name}, {question.question_date} | Helpful?{" "}
        <span>Yes</span> ({question.question_helpfulness}) | <span>Report</span>
      </p>
    </div>
  );
};

export default QuestionEntry;
