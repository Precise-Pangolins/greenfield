import axios from "axios";

const getAllAnswers = question_id => {
  return dispatch => {
    return axios
      .get(`http://3.134.102.30/qa/${question_id}/answers`)
      .then(({ data }) => {
        dispatch({ type: "LOAD_ALL_ANSWERS", answers: data.results });
      })
      .catch(err => {
        if (err) {
          console.log("Error in getAllAnswers", err);
        }
      });
  };
};

export default getAllAnswers;
