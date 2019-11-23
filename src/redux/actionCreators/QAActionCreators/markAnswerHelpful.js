import axios from "axios";

const markAHelpful = answer_id => {
  return dispatch => {
    return axios
      .get(`http:3.134.102.30/qa/answer/${answer_id}/helpful`)
      .then(() => {
        dispatch({ type: "INCREMENT_A_HELPFUL" });
      })
      .catch(err => {
        console.log("Error in updating answer helpfulness", isError);
      });
  };
};

export default markAHelpful;
