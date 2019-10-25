import { connect } from "react-redux";

import RatingDisplay from "../../../../client/components/rating-reviews/ratings/RatingDisplay.jsx";

const mapStateToProps = store => ({ productInfo: store.info });

const RatingsContainer = connect(mapStateToProps)(RatingDisplay);

export default RatingsContainer;
