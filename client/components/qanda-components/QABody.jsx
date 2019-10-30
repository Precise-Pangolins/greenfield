import React, { useState, useEffect } from "react";
import QuestionsListContainer from "../../../src/redux/containers/QAContainers/QuestionsListContainer.js";
import SearchContainer from "../../../src/redux/containers/QAContainers/SearchContainer.js";
import queryString from "querystring";

let productId = queryString.parse(location.search)["?productId"] || 1;

const QABody = ({ questions, getAllQuestionsInitialRequest }) => {
  console.log(questions);
  const [resultsQuestions, setResultsQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(4);

  const searchInQuestions = searchTerm => {
    console.log("searchterm", searchTerm);
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
    getAllQuestionsInitialRequest(productId, page, count);
  }, []);

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
        questions={questions}
        page={page}
        setPage={setPage}
        count={count}
        setCount={setCount}
      />
    </div>
  );
};

export default QABody;
