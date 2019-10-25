import { connect } from 'react-redux';
import getList from '../../actionCreators/overview-action-creators/getList.js';
import ProductList from '../../../../client/components/overview-components/ProductList';

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
)(ProductList);

export default ListContainer;
