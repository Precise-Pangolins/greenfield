import React, { useState, useEffect } from "react";
import { throwStatement } from "@babel/types";
import AnswerEntry from "./AnswerEntry.jsx";
import getAllQuestions from "../../../src/redux/actionCreators/QAActionCreators/getAllQuestions.js";

const AnswersList = ({
  answers,
  markAnswerHelpful,
  getAllQuestionsRequest
}) => {
  //console.log("answers in AL", answers);

  // let allAnswerIds = {};
  // for (let i = 0; i < answers.length; i++) {
  //   let singleAns = answers[i];
  //   let answerId = singleAns.id;

  //   if (allAnswerIds[singleAns.body] === undefined) {
  //     allAnswerIds[singleAns.body] = answerId;

  //     for (let key in allAnswerIds) {
  //       let singleAnsId = allAnswerIds[key];
  //       markAnswerHelpful(singleAnsId);
  //     }
  //   }
  // }

  return (
    <div>
      {answers.map(answer => {
        return <AnswerEntry answer={answer} />;
      })}
    </div>
  );
};

export default AnswersList;
