import React, { useState, useEffect } from "react";
import AnswerEntry from "./AnswerEntry.jsx";

const AnswersList = ({ answers }) => {
  // console.log("asnwers in AL", answers);
  return (
    <div>
      {answers.map(answer => {
        return <AnswerEntry answer={answer} />;
      })}
    </div>
  );
};

export default AnswersList;
