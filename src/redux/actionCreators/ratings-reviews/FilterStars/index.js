const redux = require("redux");
const axios = require("axios");
const action = require("../../../actions/RatingActions/filterStars.js");
const filterStars = (id, filters, sort = "relevant") => {
  return dispatch => {
    return axios
      .get(`http://3.134.102.30/reviews/${id}/list?count=100000&sort=${sort}`)
      .then(({ data }) => {
        const reviews = [];
        data.results.map(review => {
          if (filters[review.rating]) {
            reviews.push(review);
          }
        });

        dispatch(action(reviews));
      })
      .catch(error => console.error(error));
  };
};

module.exports = filterStars;
