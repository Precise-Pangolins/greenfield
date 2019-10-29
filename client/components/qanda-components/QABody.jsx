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
          answerResults.push(singleAns);
        }
      }
    }
    setResultsQuestions(results);
    setAnswersForSearchedQ(answerResults);
  };

  useEffect(() => {
    getAllQuestionsInitialRequest(productId);
  }, []);

  let defaultAnswers = {};
  for (let i = 0; i < questions.length; i++) {
    let singleQ = questions[i];

    for (let key in singleQ.answers) {
      let answer = singleQ.answers[key];
      // console.log("answers in obj foor loop", answers);
      // defaultAnswers.push(answers);
      if (defaultAnswers[singleQ.question_id]) {
        defaultAnswers[singleQ.question_id].push(answer);
      } else {
        defaultAnswers[singleQ.question_id] = [];
        defaultAnswers[singleQ.question_id].push(answer);
      }
    }
  }

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
        defaultAnswers={defaultAnswers}
        answersForSearchedQ={answersForSearchedQ}
        questions={questions}
      />
    </div>
  );
};

export default QABody;
