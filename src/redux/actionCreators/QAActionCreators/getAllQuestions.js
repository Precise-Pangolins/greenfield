import axios from "axios";

const getAllQuestions = (product_id, page = 1, count) => {
  return dispatch => {
    return axios
      .get(`http://18.223.1.30/qa/${product_id}/?&page=${page}&count=${count}`)
      .then(({ data }) => {
        dispatch({ type: "LOAD_ALL_QUESTIONS", questions: data.results });
      })
      .catch(err => {
        console.log("Error in getAllQuestions", err);
      });
  };
};

export default getAllQuestions;
