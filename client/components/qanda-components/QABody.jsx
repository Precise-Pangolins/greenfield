import React, { useState, useEffect } from "react";
import QuestionsListContainer from "../../../src/redux/containers/QAContainers/QuestionsListContainer.js";
import SearchContainer from "../../../src/redux/containers/QAContainers/SearchContainer.js";
import queryString from "querystring";

let productId = queryString.parse(location.search)["?productId"] || 1;

const QABody = ({
  questions,
  getAllQuestionsInitialRequest,
  answers,
  getAllAnswersInitialRequest
}) => {
  const [resultsQuestions, setResultsQuestions] = useState([]);
  const [answersForSearchedQ, setAnswersForSearchedQ] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedQId, setSearchedQId] = useState("");

  const searchInQuestions = searchTerm => {
    console.log("searchterm", searchTerm);
    let results = []; //questions that meet search criteria
    let answerResults = []; //answers that match searched qs
    for (let i = 0; i < questions.length; i++) {
      let currentQuestion = questions[i];

      if (currentQuestion.question_body.includes(searchTerm)) {
        results.push(currentQuestion);
      }
      for (let i = 0; i < results.length; i++) {
        for (let key in results[i].answers) {
          let singleAns = results[i].answers[key];
          console.log("single", singleAns);
          answerResults.push(singleAns);
        }
      }
    }
    setResultsQuestions(results);
    setAnswersForSearchedQ(answerResults);
  };

  console.log("results", resultsQuestions);
  console.log("answerres", answersForSearchedQ);

  useEffect(() => {
    getAllQuestionsInitialRequest(productId);
    getAllAnswersInitialRequest(productId);
  }, []);

  return (
    <div>
      Questions and Answers:
      <SearchContainer
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchInQuestions={searchInQuestions}
      />
      <QuestionsListContainer
        resultsQuestions={resultsQuestions}
        answers={answers}
        answersForSearchedQ={answersForSearchedQ}
      />
    </div>
  );
};

export default QABody;
