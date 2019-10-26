const redux = require("redux");
const axios = require("axios");
const action = require("../../actions/RatingActions/filterStars.js");
const filterStars = (id, rating) => {
  return dispatch => {
    return axios
      .get(`http://18.223.1.30/reviews/${id}/list?count=100000`)
      .then(({ data }) => {
        const reviews = data.results.map(review => {
          if (review.rating === rating) return review;
        });
        dispatch(action(reviews));
      })
      .catch(error => console.error(error));
  };
};

module.exports = filterStars;
