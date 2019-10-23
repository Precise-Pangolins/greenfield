import { connect } from "react-redux";
import getReviews from "../../actionCreators/getReviews/index.js";
import Reviews from "../../../../client/components/rating-reviews/reviews/Reviews";

const mapStateToProps = store => ({ reviews: store.reviews });
const mapDispatchToProps = dispatch => {
  return {
    handleGetReviewsRequest: id => dispatch(getReviews(id))
  };
};

const ReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);

export default ReviewsContainer;
