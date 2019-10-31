import React, { useState, useEffect } from "react";
import QuestionsListContainer from "../../../src/redux/containers/QAContainers/QuestionsListContainer.js";
import SearchContainer from "../../../src/redux/containers/QAContainers/SearchContainer.js";
import queryString from "querystring";

let productId = queryString.parse(location.search)["?productId"] || 1;

const QABody = ({ questions, getAllQuestionsInitialRequest }) => {
  const [resultsQuestions, setResultsQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [counter, setCounter] = useState(4);
  const [initialQsToLoad, setInitialQsToLoad] = useState([]);

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

  const questionsToDisplay = questions => {
    console.log("counter", counter);
    console.log("questions here", questions);
    let initialQs = questions.slice(0, counter); //q1-q4
    console.log("initialQs", initialQs);
    setInitialQsToLoad(initialQs);
  };

  //puts all qs in store
  useEffect(() => {
    console.log("prodID", productId);
    getAllQuestionsInitialRequest(productId, 1, 1000);
    // console.log("questions here", questions);
  }, [productId]);

  //[questions, counter] is what the questionsToDisplay function needs
  //to look out for changes in in order to fire this function.
  useEffect(() => {
    questionsToDisplay(questions);
  }, [questions, counter]);

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
        allQuestions={questions}
        questions2={initialQsToLoad}
        page={page}
        setPage={setPage}
        setCounter={setCounter}
        counter={counter}
        questionsToDisplay={questionsToDisplay}
      />
    </div>
  );
};

export default QABody;
