import React from "react";
import AHelpful from "./AHelpful.jsx";
import Reported from "./Reported.jsx";

const AnswerEntry = ({ answer }) => {
  // console.log("answer in AE", answer);
  return (
    <div>
      A: {answer.body}
      <div>
        {answer.answerer_name} {answer.date}
        <AHelpful answer={answer} /> <Reported answer={answer} />
      </div>
    </div>
  );
};

export default AnswerEntry;
