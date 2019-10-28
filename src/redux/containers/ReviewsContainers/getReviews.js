import { connect } from "react-redux";
import getReviews from "../../actionCreators/ratings-reviews/getReviews/index.js";
import Reviews from "../../../../client/components/rating-reviews/RatingsReviews";
import sortReviews from "../../actionCreators/ratings-reviews/sortingReviews/index.js";
import ratings from "../../actionCreators/ratings-reviews/getRating/index.js";
import filter from "../../actionCreators/ratings-reviews/FilterStars/index.js";
import clear from "../../actionCreators/ratings-reviews/FilterStars/clearFilter.js";

const mapStateToProps = store => ({
  reviews: store.reviews,
  metaData: store.metaData,
  productInfo: store.info
});
const mapDispatchToProps = dispatch => {
  return {
    handleGetReviewsRequest: (id, page, count, sort) =>
      dispatch(getReviews(id, page, count, sort)),
    handleSortReviewsRequest: (id, page, count, sort) =>
      dispatch(sortReviews(id, page, count, sort)),
    handleGetRatingsRequest: id => dispatch(ratings(id)),
    handleFilterReviewsRequest: (id, filters, sort) =>
      dispatch(filter(id, filters, sort)),
    handleClearFilterRequest: id => dispatch(clear(id))
  };
};

const ReviewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);

export default ReviewsContainer;
