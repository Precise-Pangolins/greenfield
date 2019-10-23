const redux = require("redux");
const axios = require("axios");
const getAction = require("../../actions/ReviewActions/getReviews.js");
const getReviews = id => {
  return dispatch => {
    return axios
      .get(`http://18.223.1.30/reviews/${id}/list`)
      .then(({ data }) => {
        dispatch(getAction(data.results));
      })
      .catch(error => console.error(error));
  };
};

module.exports = getReviews;
