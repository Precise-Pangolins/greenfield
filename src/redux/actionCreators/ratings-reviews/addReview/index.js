const redux = require("redux");
const axios = require("axios");
const add = require("../../../actions/ReviewActions/addReview.js");
const getReviews = require("../../../actions/ReviewActions/getReviews.js");
const parseDate = require("../../../../utils/formatDate.js");
const addReview = (id, review) => {
  return dispatch => {
    return axios
      .post(`http://18.223.1.30/reviews/${id}/`, review)
      .then(data => {
        let obj = { ...review };
        let photos = review.photos.map(url => {
          return { id: 1, url };
        });
        let date = new Date();

        obj.photos = photos;
        obj.helpfullness = 0;
        obj.reviewer_name = review.name;
        obj.recommend = 0;
        obj.response = "";

        obj.date = parseDate(date.toString());
        dispatch(add(obj));
      })
      .catch(error => console.error(error));
  };
};

module.exports = addReview;
