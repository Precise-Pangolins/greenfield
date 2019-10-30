const redux = require("redux");
const axios = require("axios");
const add = require("../../../actions/ReviewActions/addReview.js");
const getReviews = require("../../../actions/ReviewActions/getReviews.js");

const addReview = (id, review) => {
  return dispatch => {
    return axios
      .post(`http://18.223.1.30/reviews/${id}/`, review)
      .then(data => {
        dispatch(add(review));
      })
      .catch(error => console.error(error));
  };
};

module.exports = addReview;
