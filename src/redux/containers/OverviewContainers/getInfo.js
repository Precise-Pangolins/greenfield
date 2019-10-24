import { connect } from 'react-redux';
import getInfo from '../../actionCreators/overview-action-creators/getInfo.js';
import Features from '../../../../client/components/overview-components/Features';

const mapStateToProps = store => {
  return { list: store.list };
};
const mapDispatchToProps = dispatch => {
  return {
    handleGetInfoRequest: id => dispatch(getInfo(id))
  };
};

const InfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Features);

export default InfoContainer;
