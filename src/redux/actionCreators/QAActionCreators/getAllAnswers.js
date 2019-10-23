import axios from "axios";
import loadAsList from "../../actions/QAActions/aActions";

const getAllAnswers = question_id => {
  return dispatch => {
    dispatch(loadAsList());
    return axios
      .get(`http:18.223.1.30/qa/${question_id}/answers`)
      .then(results => {
        dispatch({ type: "LOAD_ALL_ANSWERS", answers: results });
      })
      .catch(err => {
        if (err) {
          console.log("Error in getAllAnswers", err);
        }
      });
  };
};

export default getAllAnswers;
