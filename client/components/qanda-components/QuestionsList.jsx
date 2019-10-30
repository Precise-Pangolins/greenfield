import React, { useState, useEffect } from "react";
import QuestionEntry from "./QuestionEntry.jsx";
import QuestionForm from "./QuestionForm.jsx";
import queryString from "querystring";
import uuidv4 from "uuidv4";

let productId = queryString.parse(location.search)["?productId"] || 1;

const QuestionsList = ({
  questions,
  getAllQuestionsRequest,
  resultsQuestions
}) => {
  useEffect(() => {
    getAllQuestionsRequest(productId);
  }, []);

  if (resultsQuestions.length === 0) {
    return (
      <div>
        <div>
          {questions.map(question => {
            return (
              <div key={uuidv4()}>
                <QuestionEntry question={question} answers={question.answers} />
              </div>
            );
          })}
        </div>
        <button>More Answered Questions</button>
        <QuestionForm productId={productId} />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          {resultsQuestions.map(resultsQuestion => {
            {
            }
            return (
              <div key={uuidv4()}>
                <QuestionEntry
                  question={resultsQuestion}
                  answers={resultsQuestion.answers}
                />
              </div>
            );
          })}
        </div>
        <button>More Answered Questions</button>

        <button>Add A Question</button>
        <QuestionForm />
      </div>
    );
  }
};

export default QuestionsList;
