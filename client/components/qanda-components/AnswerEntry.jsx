import React from "react";

const AnswerEntry = answer => {
  console.log("answer in AE", answer.answer.body);
  return (
    <div>
      A: {answer.answer.body}
      <p>
        {answer.answer.answerer_name} {answer.answer.date}
      </p>
    </div>
  );
};

export default AnswerEntry;
