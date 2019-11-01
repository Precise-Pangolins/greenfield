import React from "react";
import AHelpful from "./AHelpful.jsx";
import Reported from "./Reported.jsx";
import { Typography } from "@material-ui/core";

const AnswerEntry = ({ answer }) => {
  console.log("answer in AE", answer);
  return (
    <div>
      <Typography style={{ display: "inline-block" }} variant="body2">
        {answer.body}
      </Typography>
      <div>
        <Typography variant="caption">
          {answer.answerer_name} {answer.date} |
        </Typography>
        <Typography style={{ display: "inline-block" }}>
          <AHelpful answer={answer} />
        </Typography>
        <Typography style={{ display: "inline-block" }}>
          <Reported answer={answer} />
        </Typography>
      </div>
    </div>
  );
};

export default AnswerEntry;
