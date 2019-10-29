import { connect } from "react-redux";

import AddReview from "../../../../client/components/rating-reviews/reviews/AddReview.jsx";
import addReviewAction from "../../actionCreators/ratings-reviews/addReview/index.js";

const mapStateToProps = store => ({
  metaData: store.metaData
});
const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: review => dispatch(addReviewAction(review))
  };
};

const AddReviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReview);

export default AddReviewContainer;
