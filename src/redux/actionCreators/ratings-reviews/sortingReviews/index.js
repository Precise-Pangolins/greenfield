const redux = require("redux");
const axios = require("axios");
const getAction = require("../../../actions/ReviewActions/sort");
const getReviews = (id, page = 1, count = 2, sort = "relevance") => {
  console.log("sort called");
  return dispatch => {
    return axios
      .get(
        `http://18.223.1.30/reviews/${id}/list?page=${page}&count=${count}&sort=${sort}`
      )
      .then(({ data }) => {
        dispatch(getAction(data.results));
      })
      .catch(error => console.error(error));
  };
};

module.exports = getReviews;
