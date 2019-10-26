import React, { useState, useEffect } from "react";
import QuestionEntry from "./QuestionEntry.jsx";

const QuestionsList = ({
  questions,
  getAllQuestionsRequest,
  resultsQuestions,
  setResultQuestions,
  answers
}) => {
  const [page, setPage] = useState(2);
  useEffect(() => {
    getAllQuestionsRequest(1);
  }, []);

  console.log("answers in QL", answers);
  if (resultsQuestions.length === 0) {
    return (
      <div>
        {questions.map(question => {
          return (
            <div>
              <QuestionEntry question={question} answers={answers} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        {resultsQuestions.map(resultsQuestion => {
          {
            console.log("resultsQuestion in MAP", resultsQuestion);
          }
          return (
            <div>
              <QuestionEntry question={resultsQuestion} />
            </div>
          );
        })}
      </div>
    );
  }
  // return (
  //   <div>
  //       {questions.map(question => {
  //         return (
  //           <div>
  //             <QuestionEntry question={question} />
  //           </div>
  //         )
  //       })}
  //   </div>
  // );
};

export default QuestionsList;
