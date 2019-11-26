const redux = require("redux");
const axios = require("axios");
const getAction = require("../../../actions/RatingActions/clearFilter.js");
const getReviews = (id, page = 1) => {
  return dispatch => {
    return axios
      .get(`http://3.134.102.30/reviews/${id}/list?page=${page}&count=2`)
      .then(({ data }) => {
        dispatch(getAction(data.results));
      })
      .catch(error => console.error(error));
  };
};

module.exports = getReviews;
