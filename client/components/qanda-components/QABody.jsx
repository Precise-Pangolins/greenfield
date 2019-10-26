import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionsListContainer from "../../../src/redux/containers/QAContainers/QuestionsListContainer";
import SearchContainer from "../../../src/redux/containers/QAContainers/SearchContainer";
import QAContainer from "../../../src/redux/containers/QAContainers/QAContainer";

const QABody = ({ questions, getAllQuestionsInitialRequest }) => {
  const [resultQuestions, setResultQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchInQuestions = searchTerm => {
    console.log("searchterm", searchTerm);
    let results = [];
    for (let i = 0; i < questions.length; i++) {
      let currentQuestion = questions[i];
      if (currentQuestion.question_body.includes(searchTerm)) {
        results.push(currentQuestion);
      }
    }
    console.log("results heres", results);
    setResultQuestions(results);
  };

  console.log("resultQuestions", resultQuestions);

  useEffect(() => {
    getAllQuestionsInitialRequest(1);
  }, []);

  return (
    <div>
      Questions and Answers:
      <SearchContainer
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchInQuestions={searchInQuestions}
      />
      <QuestionsListContainer resultsQuestions={resultQuestions} />
    </div>
  );
};

export default QABody;
