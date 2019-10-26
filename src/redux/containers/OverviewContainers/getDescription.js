import { connect } from 'react-redux';
import getInfo from '../../actionCreators/overview-action-creators/getInfo.js';
import Description from '../../../../client/components/overview-components/ProductDescription';

const mapStateToProps = store => {
  return { info: store.info };
};
const mapDispatchToProps = dispatch => {
  return {
    handleGetInfoRequest: id => dispatch(getInfo(id))
  };
};

const DescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Description);

export default DescriptionContainer;
