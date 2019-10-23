const axios = require("axios");
const getAction = require("../../actions/getReviews.js");
const getReviews = id => {
  return axios
    .get(`http://18.223.1.30/reviews/${id}/list`)
    .then(result => {
      console.log(result);
    })
    .catch(error => console.error(error));
};

module.exports = getReviews;
