import axios from "axios";
import loadQsList from "../../actions/QAActions/qActions";

const getAllQuestions = product_id => {
  return dispatch => {
    dispatch(loadQsList());
    return axios
      .get(`http:18.223.1.30/qa/${product_id}`)
      .then(results => {
        dispatch({ type: "LOAD_ALL_QUESTIONS", questions: results });
      })
      .catch(err => {
        if (err) {
          console.log("Error in getAllQuestions", err);
        }
      });
  };
};

export default getAllQuestions;
