import React from "react";
import { throwStatement } from "@babel/types";
import AnswerEntry from "./AnswerEntry.jsx";
const uuidv4 = require("uuid/v4");

const AnswersList = ({ answers }) => {
  return (
    <div>
      {answers.map(answer => {
        return <AnswerEntry key={uuidv4()} answer={answer} />;
      })}
    </div>
  );
};

export default AnswersList;
