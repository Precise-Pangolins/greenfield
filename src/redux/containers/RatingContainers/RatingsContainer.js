import { connect } from "react-redux";

import RatingDisplay from "../../../../client/components/rating-reviews/ratings/RatingDisplay.jsx";
const ratings = require("../../actionCreators/getRating/index.js");
const filter = require("../../actionCreators/FilterStars/index.js");

const mapStateToProps = store => ({
  productInfo: store.info,
  metaData: store.metaData
});
const mapDispatchToProps = dispatch => {
  return {
    handleGetRatingsRequest: id => dispatch(ratings(id)),
    handleFilterRatingsRequest: (id, rating) => dispatch(filter(id, rating))
  };
};
const RatingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingDisplay);

export default RatingsContainer;
