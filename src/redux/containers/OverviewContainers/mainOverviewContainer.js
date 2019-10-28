import { connect } from 'react-redux';
import {
  getProdStyles,
  getProdInfo
} from '../../actionCreators/overviewActions.js';
import Overview from '../../../../client/components/overview-components/overview.jsx';

const mapStateToProps = store => {
  return { styles: store.styles, info: store.info };
};
const mapDispatchToProps = dispatch => {
  return {
    handleGetStylesRequest: id => dispatch(getProdStyles(id)),
    handleGetProductRequest: id => dispatch(getProdInfo(id))
  };
};

const OverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);

export default OverviewContainer;
