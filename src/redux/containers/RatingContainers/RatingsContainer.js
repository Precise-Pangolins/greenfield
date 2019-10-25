import { connect } from "react-redux";

import RatingDisplay from "../../../../client/components/rating-reviews/ratings/RatingDisplay.jsx";
const ratings = require("../../actions/RatingActions/getProductMeta.js");

const mapStateToProps = store => ({ productInfo: store.info });
const mapDispatchToProps = dispatch => {
  return {
    handleGetRatingsRequest: id => dispatch(ratings(id))
  };
};
const RatingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingDisplay);

export default RatingsContainer;
