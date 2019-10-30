import React, { useState, useEffect } from "react";
import AnswerEntry from "./AnswerEntry.jsx";

const AnswersList = ({ answers }) => {
  console.log("Answers in AnswersLit", answers);
  return (
    <div>
      {Object.keys(answers).map(key => {
        return <AnswerEntry answer={answers[key]} />;
      })}
    </div>
  );
};

export default AnswersList;
