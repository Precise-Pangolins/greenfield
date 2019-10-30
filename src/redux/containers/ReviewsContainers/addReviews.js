import { connect } from "react-redux";

import AddReview from "../../../../client/components/rating-reviews/reviews/AddReview.jsx";
import addReviewAction from "../../actionCreators/ratings-reviews/addReview/index.js";

const mapStateToProps = store => ({
  metaData: store.metaData,
  info: store.info
});
const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (id, review) => dispatch(addReviewAction(id, review))
  };
};

const AddReviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReview);

export default AddReviewContainer;
