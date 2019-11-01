import React, { useState, useEffect } from "react";
import AnswerEntry from "./AnswerEntry.jsx";
import AnswersForm from "./AnswersForm.jsx";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import uuid from "uuidv4";
import uuidv4 from "uuidv4";
import { Typography } from "@material-ui/core";

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
      <Typography component="p">
        A:
        {displayedAns.map(answer => {
          return (
            <div key={uuidv4()}>
              <AnswerEntry answer={answer} />
            </div>
          );
        })}
      </Typography>
      {allAnswers.length <= 2 ? (
        ""
      ) : allAnswers.length > displayedAns.length ? (
        <Button
          variant="outlined"
          color="primary"
          onClick={handleDisplayUpdateClick}
        >
          LOAD MORE ANSWERS
        </Button>
      ) : (
        <Button variant="outlined" color="primary" onClick={collapseOnClick}>
          COLLAPSE
        </Button>
      )}
      <AnswersForm productId={productId} question={question} />
    </div>
  );
};

export default AnswersList;
