import React from "react";
import QuestionEntry from "./QuestionEntry.jsx";

const QuestionsList = ({ questions }) => {
  console.log('questionS in list', questions)
  <div class="questionsList">
    {questions.map(question => (
      <QuestionEntry question={question} />
    ))}
  </div>;
};

export default QuestionsList;
