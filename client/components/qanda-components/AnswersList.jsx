import React, { useState, useEffect } from 'react';
import AnswerEntry from './AnswerEntry';
import getAllAnswers from '../../../src/redux/actionCreators/QAActionCreators/getAllAnswers';

const AnswersList = ({ answers, getAllAnswersRequest }) => {
  const [page, setPage] = useState(2);

  useEffect(() => {
    getAllAnswersRequest(1);
  }, []);

  console.log("answers props", answers);

  return (
    <div>
      {answers.map(answer => {
        return (
          <div>
            <AnswerEntry answer={answer} />
          </div>
        );
      })}
    </div>
  );
};

export default AnswersList;
