import React, { useState, useEffect } from "react";
import AnswersList from "./AnswersList.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import QHelpful from "./QHelpful.jsx";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const QuestionEntry = ({ question, answers, productId }) => {
  const classes = useStyles();
  return (
    <div class="questionEntry">
      <Paper elevation="12" className={classes.root}>
        <Typography variant="h6">
          <strong>Q:</strong> {question.question_body}{" "}
        </Typography>
        <QHelpful question={question} />
        <AnswersList
          answers={answers}
          productId={productId}
          question={question}
        />
        <Typography variant="subtitle1">
          <p>
            by {question.asker_name}, {question.question_date} | Helpful?{" "}
            <span>Yes</span> ({question.question_helpfulness})
          </p>
        </Typography>
      </Paper>
    </div>
  );
};

export default QuestionEntry;
