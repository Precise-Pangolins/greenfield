import React from "react";

const AnswerEntry = answer => {
  console.log("answer in entry", answer);

  return <div>A: P{answer.answer.body}</div>;
};

export default AnswerEntry;
