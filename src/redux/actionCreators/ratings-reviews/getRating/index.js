const redux = require("redux");
const axios = require("axios");
const ratings = require("../../../actions/RatingActions/getProductMeta.js");
const getReviews = id => {
  return dispatch => {
    return axios
      .get(`http://3.134.102.30/reviews/${id}/meta`)
      .then(({ data }) => {
        dispatch(ratings(data));
      })
      .catch(error => console.error(error));
  };
};

module.exports = getReviews;
