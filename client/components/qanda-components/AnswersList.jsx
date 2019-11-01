import React, { useState, useEffect } from "react";
import AnswerEntry from "./AnswerEntry.jsx";
import AnswersForm from "./AnswersForm.jsx";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import uuid from "uuidv4";
import uuidv4 from "uuidv4";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1)
  }
}));

const AnswersList = ({ answers, productId, question }) => {
  const [allAnswers, setAllAnswers] = useState([]);
  const [displayedAns, setDisplayedAns] = useState([]);

  useEffect(() => {
    setAllAnswers(Object.values(answers));
  }, [answers]);

  useEffect(() => {
    setDisplayedAns(allAnswers.slice(0, 2));
  }, [allAnswers]);

  const handleDisplayUpdateClick = () => {
    setDisplayedAns(allAnswers);
  };

  const collapseOnClick = () => {
    setDisplayedAns(allAnswers.slice(0, 2));
  };

  return (
    <div>
      {" "}
      <Typography style={{ display: "inline-block" }} component="p">
        {displayedAns.map(answer => {
          return (
            <div key={uuidv4()}>
              <Typography style={{ display: "inline-block" }}>
                A: <AnswerEntry answer={answer} />
              </Typography>
            </div>
          );
        })}
      </Typography>
      {allAnswers.length <= 2 ? (
        ""
      ) : allAnswers.length > displayedAns.length ? (
        <div className="load-more-as-btn">
          <Button
            className="load-more-answers-btn"
            variant="outlined"
            color="primary"
            onClick={handleDisplayUpdateClick}
          >
            LOAD MORE ANSWERS
          </Button>
        </div>
      ) : (
        <div className="collapse-btn">
          <Button variant="outlined" color="primary" onClick={collapseOnClick}>
            COLLAPSE
          </Button>
        </div>
      )}
      <AnswersForm productId={productId} question={question} />
    </div>
  );
};

export default AnswersList;
