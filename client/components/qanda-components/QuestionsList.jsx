import React, { useState, useEffect } from "react";
import QuestionEntry from "./QuestionEntry.jsx";
import QuestionForm from "./QuestionForm.jsx";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import queryString from "querystring";
import uuidv4 from "uuidv4";

let productId = queryString.parse(location.search)["?productId"] || 1;

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const QuestionsList = ({
  questions,
  questions2,
  allQuestions,
  getTwoMoreQuestions,
  resultsQuestions,
  questionsToDisplay,
  page,
  counter,
  setPage,
  setCounter
}) => {

  if (resultsQuestions.length === 0) {
    return (
      <div>
        <div>
          {questions2.map(question => {
            return (
              <div key={uuidv4()}>
                <QuestionEntry question={question} answers={question.answers} />
              </div>
            );
          })}
        </div>

        <QuestionForm productId={productId} />
        <Grid container spaceing={0}>
          <Grid item md={6}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                console.log("counter here", counter);
                setCounter(counter + 2);
                questionsToDisplay(allQuestions);
              }}
            >
              {/* {console.log("questions after getTwoMoreQs", questions)}; Show */}
              More Questions
            </Button>
          </Grid>
        </Grid>
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

        <button>Add A Question</button>
        <QuestionForm productId={productId} />
        <Grid container spaceing={0}>
          <Grid item md={6}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                console.log("counter here", counter);
                setCounter(counter + 2);
                questionsToDisplay(allQuestions);
              }}
            >
              Show More Questions
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default QuestionsList;
