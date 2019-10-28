import React from "react";
import { throwStatement } from "@babel/types";
import AnswerEntry from "./AnswerEntry.jsx";

const AnswersList = ({ answers }) => {
  return (
    <div>
      {answers.map(answer => {
        return <AnswerEntry key={answer.id} answer={answer} />;
      })}
    </div>
  );
};

export default AnswersList;
