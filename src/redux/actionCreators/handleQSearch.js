import axios from "axios";

const handleQSearch = product_id => {
  return dispatch => {
    return axios
      .get(`http:18.223.1.30/qa/${product_id}`)
      .then(results => {
        dispatch(
          { type: "LOAD_ALL_QUESTIONS", questions: results },
          { type: "LOAD ALL ANSWERS,", answers: results.answers }
        );
      })
      .catch(err => {
        if (err) {
          console.log("Error in handleQSearch", err);
        }
      });
  };
};
