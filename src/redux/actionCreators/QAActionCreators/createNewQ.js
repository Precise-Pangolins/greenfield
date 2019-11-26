import axios from "axios";

const createNewQuestion = product_id => {
  return dispatch => {
    return axios
      .post(`http://3.134.102.30/qa/${product_id}`)
      .then(() => {
        dispatch({ type: "CREATE_NEW_QUESTION", question: question });
      })
      .catch(err => {
        console.log("Error in posting new question");
      });
  };
};

export default createNewQuestion;
