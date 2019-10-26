import React, { useState, useEffect } from "react";
import QuestionsListContainer from "../../../src/redux/containers/QAContainers/QuestionsListContainer";
import SearchContainer from "../../../src/redux/containers/QAContainers/SearchContainer";

const QABody = ({
  questions,
  getAllQuestionsInitialRequest,
  answers,
  getAllAnswersInitialRequest
}) => {
  const [resultQuestions, setResultQuestions] = useState([]);
  const [answersForSearchedQ, setAnswersForSearchedQ] = useState([]);
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
    setResultQuestions(results);
  };


  useEffect(() => {
    getAllQuestionsInitialRequest(1);
    getAllAnswersInitialRequest(1);
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
        resultsQuestions={resultQuestions}
        answers={answers}
      />
    </div>
  );
};

export default QABody;
