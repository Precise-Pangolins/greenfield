import React, { useState, useEffect } from "react";
import QuestionEntry from "./QuestionEntry.jsx";
import QuestionForm from "./QuestionForm.jsx";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import queryString from "querystring";
import uuidv4 from "uuidv4";

let productId = queryString.parse(location.search)["?productId"] || 1;

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    flexGrow: 1,
    minWidth: 600
  },
  input: {
    display: "none"
  }
}));

const QuestionsList = ({
  questions2,
  allQuestions,
  resultsQuestions,
  questionsToDisplay,
  counter,
  setCounter
}) => {
  if (resultsQuestions.length === 0) {
    return (
      <div>
        <div>
          {questions2.map(question => {
            return (
              <div key={uuidv4()}>
                <QuestionEntry
                  productId={productId}
                  question={question}
                  answers={question.answers}
                />
              </div>
            );
          })}
        </div>

        <div className="ql-btn-flex-container-1">
          <QuestionForm productId={productId} />
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setCounter(counter + 2);
              questionsToDisplay(allQuestions);
            }}
          >
            Show More Questions
          </Button>
        </div>
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
                  productId={productId}
                  question={resultsQuestion}
                  answers={resultsQuestion.answers}
                />
              </div>
            );
          })}
        </div>
        <div className="ql-btn-flex-container-1">
          <Button className="add-a-q-btn">Add A Question</Button>
          <QuestionForm productId={productId} />
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setCounter(counter + 2);
              questionsToDisplay(allQuestions);
            }}
          >
            Show More <br />
            Questions
          </Button>
        </div>
      </div>
    );
  }
};

export default QuestionsList;
