import React from "react";
import AnswerListClassComp from "./AnswersListClassComp.jsx";

const QuestionEntry = ({ question }) => {
  console.log("q in QE", question);

  // const arrayOfAnsIds = Object.keys(question.question.answers);
  return (
    <div class="questionEntry">
      {" "}
      <strong>Q:</strong> {question.question_body}
      <AnswerListClassComp question={question} />
      <p>
        by {question.asker_name}, {question.question_date} | Helpful?{" "}
        <span>Yes</span> ({question.question_helpfulness}) | <span>Report</span>
      </p>
    </div>
  );
};

export default QuestionEntry;
