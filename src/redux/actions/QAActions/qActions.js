export const loadQsList = "LOAD_ALL_QUESTIONS";

const loadQsList = questions => ({
  type: "LOAD_ALL_QUESTIONS",
  questions: questions
});
