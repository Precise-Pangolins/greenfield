import { connect } from 'react-redux';
import {
  getProdStyles,
  getProdInfo,
  postToCart
} from '../../actionCreators/overviewActions.js';
import Overview from '../../../../client/components/overview-components/overview.jsx';

const mapStateToProps = store => {
  return { styles: store.styles, info: store.info, cart: store.cart };
};
const mapDispatchToProps = dispatch => {
  return {
    handleGetStylesRequest: id => dispatch(getProdStyles(id)),
    handleGetProductRequest: id => dispatch(getProdInfo(id)),
    handlePostToCartRequest: (userSession, productId) =>
      dispatch(postToCart(userSession, productId))
  };
};

const OverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);

export default OverviewContainer;
