import axios from "axios";

const getAllQuestions = product_id => {
  return dispatch => {
    return axios
      .get(`http://18.223.1.30/qa/${product_id}`)
      .then(({ data }) => {
        dispatch({ type: "LOAD_ALL_QUESTIONS", questions: data.results });
      })
      .catch(err => {
        console.log("Error in getAllQuestions", err);
      });
  };
};

export default getAllQuestions;
