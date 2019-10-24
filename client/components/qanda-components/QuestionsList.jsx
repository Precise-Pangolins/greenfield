import React, { useState, useEffect } from "react";
import QuestionEntry from "./QuestionEntry.jsx";
// import QuestionsListContainer from "../../../src/redux/containers/QAContainers/QuestionsListContainer.js";
// import store from "../../../src/redux/store/index";

const QuestionsList = ({ questions, getAllQuestionsRequest }) => {
  useEffect(() => {
    getAllQuestionsRequest();
  }, []);

  return (
    <div>
      {questions.map(question => {
        console.log("inside questions.map", question);
        return <QuestionEntry question={question} />;
      })}
    </div>
  );
};

export default QuestionsList;
