import React, { useState, useEffect } from "react";
import AnswerEntry from "./AnswerEntry.jsx";

import uuid from "uuidv4";
import uuidv4 from "uuidv4";

const AnswersList = ({ answers }) => {
  return (
    <div>
      {Object.keys(answers).map(key => {
        return (
          <div key={uuidv4()}>
            <AnswerEntry answer={answers[key]} />
          </div>
        );
      })}
    </div>
  );
};

export default AnswersList;
