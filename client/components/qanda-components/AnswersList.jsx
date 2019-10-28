import React from "react";
import { throwStatement } from "@babel/types";
import AnswerEntry from "./AnswerEntry.jsx";
import axios from "axios";

const AnswersList = ({ answers }) => {
  console.log("answers", answers);

  return (
    <div>
      {answers.map(answer => {
        return <AnswerEntry answer={answer} />;
      })}
    </div>
  );
};

export default AnswersList;
