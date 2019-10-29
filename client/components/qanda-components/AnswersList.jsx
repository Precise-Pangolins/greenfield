import React from "react";
import { throwStatement } from "@babel/types";
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
