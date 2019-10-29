import React from "react";
import AnswersList from "./AnswersList.jsx";
import QHelpful from "./QHelpful.jsx";

const QuestionEntry = ({
  question,
  answers,
  markQuestionHelpful,
  markAnswerHelpful,
  getAllQuestionsRequest
}) => {
  return (
    <div class="questionEntry">
      {" "}
      <strong>Q:</strong> {question.question_body}
      <QHelpful question={question} />
      <AnswersList
        answers={answers}
        markAnswerHelpful={markAnswerHelpful}
        getAllQuestionsRequest={getAllQuestionsRequest}
      />
      <p>
        by {question.asker_name}, {question.question_date} | Helpful?{" "}
        <span>Yes</span> ({question.question_helpfulness}) | <span>Report</span>
      </p>
    </div>
  );
};

export default QuestionEntry;
