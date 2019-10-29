import React from "react";

const AnswerEntry = answer => {
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
