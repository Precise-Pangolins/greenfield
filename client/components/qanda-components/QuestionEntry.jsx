import React from 'react';
import AnswerList from './AnswersList.jsx';

const QuestionEntry = question => {
  console.log('question in entry', question.question);
  return (
    <div>
      {' '}
      <strong>Q:</strong> {question.question.question_body}
      {/* <AnswerList /> */}
      <p>
        by {question.question.asker_name}, {question.question.question_date} |
        Helpful? <span>Yes</span> ({question.question.question_helpfulness}) |{' '}
        <span>Report</span>
      </p>
    </div>
  );
};

export default QuestionEntry;
