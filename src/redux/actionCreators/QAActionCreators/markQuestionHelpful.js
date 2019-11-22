import axios from "axios";

const markQHelpful = question_id => {
  return dispatch => {
    return axios
      .get(`http://3.134.102.30/qa/${question_id}/helpful`)
      .then(() => {
        dispatch({ type: "INCREMENT_Q_HELPFUL" });
      })
      .catch(err => {
        if (err) {
          console.log("Error in markQHelpful", err);
        }
      });
  };
};

export default markQHelpful;
