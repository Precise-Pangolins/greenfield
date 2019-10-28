import React, { useState, useEffect } from 'react';
import QuestionEntry from './QuestionEntry.jsx';

const QuestionsList = ({
  questions,
  getAllQuestionsRequest,
  resultsQuestions,
  answersForSearchedQ,
  answers
}) => {
  const [page, setPage] = useState(2);
  useEffect(() => {
    getAllQuestionsRequest(1);
  }, []);

<<<<<<< HEAD
  if (resultsQuestions.length === 0) {
    return (
      <div>
        {questions.map(question => {
          return (
            <div>
              <QuestionEntry question={question} answers={answers} />
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
                question={resultsQuestion}
                answers={answersForSearchedQ}
              />
            </div>
          );
        })}
      </div>
    );
  }
=======

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
>>>>>>> master
};

export default QuestionsList;
