const redux = require('redux');
const axios = require('axios');
const getAction = require('../../actionCreators/ReviewActions/getReviews.js');
const getReviews = (id, page) => {
  return dispatch => {
    return axios
      .get(`http://18.223.1.30/reviews/${id}/list?page=${page}&count=2`)
      .then(({ data }) => {
        dispatch(getAction(data.results));
      })
      .catch(error => console.error(error));
  };
};

module.exports = getReviews;
