import React from "react";
import QuestionList from "../qanda-components/QuestionsList.jsx";

const QuestionEntry = ({ question }) => {
  console.log("question in entry here:", question);
  return <div className="questionEntry"> {question}</div>;
};

export default QuestionEntry;
