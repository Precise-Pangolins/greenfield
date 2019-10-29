import StarRatings from "../../../../client/components/rating-reviews/ratings/StarRatings.jsx";
import metaData from "../../actionCreators/ratings-reviews/getRating/index.js";
import { connect } from "react-redux";

const mapStateToProps = store => ({ metaData: store.metaData });

const mapDispatchToProps = dispatch => {
  return {
    getRatingsRequest: id => dispatch(metaData(id))
  };
};
const StarRatingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StarRatings);

export default StarRatingsContainer;
