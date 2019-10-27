import { connect } from 'react-redux';
import getInfo from '../../actionCreators/overview-action-creators/getInfo.js';
import NewMainProduct from '../../../../client/components/overview-components/NewMainProduct';

const mapStateToProps = store => {
  return { info: store.info };
};
const mapDispatchToProps = dispatch => {
  return {
    handleGetInfoRequest: id => dispatch(getInfo(id))
  };
};

const NewMainProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMainProduct);

export default NewMainProduct;
