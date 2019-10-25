import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionsListContainer from "../../../src/redux/containers/QAContainers/QuestionsListContainer";
import SearchContainer from "../../../src/redux/containers/QAContainers/SearchContainer";
import QAContainer from "../../../src/redux/containers/QAContainers/QAContainer";

const QABody = ({ questions, getAllQuestionsInitialRequest }) => {
  useEffect(() => {
    getAllQuestionsInitialRequest(1);
  }, []);

  console.log("questions in QAbody", questions);
  
  return (
    <div>
      Questions and Answers
      <SearchContainer />
      <QuestionsListContainer />
    </div>
  );
};

export default QABody;
