import { connect } from 'react-redux';
import getList from '../../actionCreators/overview-action-creators/productInfo.actionCreator.getList.js';
import ProductInfo from '../../../../client/components/overview-components/ProductInfo';

const mapStateToProps = store => {
  return { list: store.list };
};
const mapDispatchToProps = dispatch => {
  return {
    handleGetListRequest: () => dispatch(getList())
  };
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductInfo);

export default ListContainer;
