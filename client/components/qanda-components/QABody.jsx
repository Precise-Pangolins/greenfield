import React, { useState, useEffect } from "react";
import QuestionsListContainer from "../../../src/redux/containers/QAContainers/QuestionsListContainer.js";
import SearchContainer from "../../../src/redux/containers/QAContainers/SearchContainer.js";
import queryString from "querystring";

let productId = queryString.parse(location.search)["?productId"] || 1;

const QABody = ({ questions, getAllQuestionsInitialRequest, answers }) => {
  const [resultsQuestions, setResultsQuestions] = useState([]);
  const [answersForSearchedQ, setAnswersForSearchedQ] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [defaultAnswersOnLoad, setDefaultAnswersOnLoad] = useState([]);

  const searchInQuestions = searchTerm => {
    let results = []; //questions that meet search criteria

    for (let i = 0; i < questions.length; i++) {
      let currentQuestion = questions[i];

      if (currentQuestion.question_body.includes(searchTerm)) {
        results.push(currentQuestion);
      }
    }
    setResultsQuestions(results);
  };

  useEffect(() => {
    getAllQuestionsInitialRequest(productId);
  }, []);

  let defaultAnswers = {};

  return (
    <div>
      Questions and Answers:
      <SearchContainer
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        s
        searchInQuestions={searchInQuestions}
      />
      <QuestionsListContainer
        resultsQuestions={resultsQuestions}
        // defaultAnswers={defaultAnswers}
        // answersForSearchedQ={answersForSearchedQ}
        questions={questions}
      />
    </div>
  );
};

export default QABody;
