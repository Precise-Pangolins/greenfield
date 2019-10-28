import React from "react";
import { throwStatement } from "@babel/types";
import AnswerEntry from "./AnswerEntry.jsx";

const AnswersList = ({ answers }) => {
  console.log("answers in answerlist", answers);
  return (
    <div>
      {answers.map(answer => {
        return <AnswerEntry answer={answer} />;
      })}
    </div>
  );
};

export default AnswersList;
