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
      <Paper elevation="15" className={classes.root}>
        <Typography component="p">
          <strong>Q:</strong> {question.question_body}{" "}
        </Typography>
        <QHelpful question={question} />
        <AnswersList
          answers={answers}
          productId={productId}
          question={question}
        />
        <p>
          by {question.asker_name}, {question.question_date} | Helpful?{" "}
          <span>Yes</span> ({question.question_helpfulness}) |{" "}
          <span>Report</span>
        </p>
      </Paper>
    </div>
  );
};

export default QuestionEntry;
