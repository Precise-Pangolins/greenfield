import axios from "axios";

const createNewAnswer = question_id => {
  return dispatch => {
    return axios
      .post(`http://3.134.102.30/qa/${question_id}/answers`)
      .then(() => {
        dispatch({ type: "CREATE_NEW_ANSWER", answer: answer });
      })
      .catch(err => {
        console.log("Error in posting new answer");
      });
  };
};

export default createNewAnswer;
