import React from "react";
import AHelpful from "./AHelpful.jsx";
import Reported from "./Reported.jsx";
import { Typography } from "@material-ui/core";

const AnswerEntry = ({ answer }) => {
  console.log("answer in AE", answer);
  return (
    <div>
      <Typography component="p">{answer.body}</Typography>
      <div>
        <Typography component="p">
          {answer.answerer_name} {answer.date}
        </Typography>
        <AHelpful answer={answer} /> <Reported answer={answer} />
      </div>
    </div>
  );
};

export default AnswerEntry;
