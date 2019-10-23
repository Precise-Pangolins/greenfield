import { formatResultsErrors } from "jest-message-util";

const loadQList = questions => ({
  type: "LOAD-ALL_QUESTIONS",
  questions: questions
});

export default loadQList;
 