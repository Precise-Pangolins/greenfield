import React, { useState, useEffect } from "react";
import QuestionEntry from "./QuestionEntry.jsx";

const QuestionsList = ({ questions, getAllQuestionsRequest, resultsQuestions, setResultQuestions }) => {
  const [page, setPage] = useState(2);
  useEffect(() => {
    getAllQuestionsRequest(1);
  }, []);


  return (
    <div>
      {questions.map(question => {
        return (
          <div>
            <QuestionEntry question={question} />
          </div>
        );
      })}

    </div>
  );
};

export default QuestionsList;
