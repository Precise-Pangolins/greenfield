import React, { useState, useEffect } from "react";
import QuestionEntry from "./QuestionEntry.jsx";
import queryString from "querystring";

let productId = queryString.parse(location.search)["?productId"] || 1;

const QuestionsList = ({
  questions,
  getAllQuestionsRequest,
  getAllAnswersRequest,
  resultsQuestions,
  answersForSearchedQ,
  defaultAnswers
}) => {
  const [page, setPage] = useState(2);

  useEffect(() => {
    getAllQuestionsRequest(productId);
  }, []);

  if (resultsQuestions.length === 0) {
    return (
      <div>
        {questions.map(question => {
          return (
            <div>
              <QuestionEntry
                key={question._id}
                question={question}
                answers={defaultAnswers[question.question_id]}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        {resultsQuestions.map(resultsQuestion => {
          {
          }
          return (
            <div>
              <QuestionEntry
                key={question_id}
                question={resultsQuestion}
                answers={answersForSearchedQ}
              />
            </div>
          );
        })}
      </div>
    );
  }
};

export default QuestionsList;
