import { connect } from "react-redux";

import RatingDisplay from "../../../../client/components/rating-reviews/ratings/RatingDisplay.jsx";
const ratings = require("../../actionCreators/ratings-reviews/getRating/index.js");
const filter = require("../../actionCreators/ratings-reviews/FilterStars/index.js");
const clear = require("../../actionCreators/ratings-reviews/FilterStars/clearFilter");

const mapStateToProps = store => ({
  productInfo: store.info,
  metaData: store.metaData
});
const mapDispatchToProps = dispatch => {
  return {
    handleGetRatingsRequest: id => dispatch(ratings(id)),
    handleFilterReviewsRequest: (id, rating) => dispatch(filter(id, rating)),
    handleClearFilterRequest: id => dispatch(clear(id))
  };
};
const RatingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingDisplay);

export default RatingsContainer;
