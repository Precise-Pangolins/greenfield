import React, { useState, useEffect } from "react";
import QuestionEntry from "./QuestionEntry.jsx";

const QuestionsList = ({
  questions,
  getAllQuestionsRequest,
  resultsQuestions,
  setResultQuestions
}) => {
  const [page, setPage] = useState(2);
  useEffect(() => {
    getAllQuestionsRequest(1);
  }, []);

  if (resultsQuestions.length === 0) {
    return (
      <div>
        {questions.map(question => {
          return (
            <div>
              <QuestionEntry question={question} />
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
