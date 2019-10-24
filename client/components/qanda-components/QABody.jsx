import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionsListContainer from "../../../src/redux/containers/QAContainers/QuestionsListContainer";

const QABody = () => {
  return (
    <div>
      Questions and Answers
      <QuestionsListContainer />
    </div>
  );
};

export default QABody;
