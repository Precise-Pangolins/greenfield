import { connect } from 'react-redux';
import getStyles from '../../actionCreators/overview-action-creators/getStyles.js';
import ImgGallery from '../../../../client/components/overview-components/ImgGallery';

const mapStateToProps = store => {
  // console.log({ insideContainer: store.styles });
  return { styles: store.styles };
};
const mapDispatchToProps = dispatch => {
  return {
    handleGetStylesRequest: id => dispatch(getStyles(id))
  };
};

const StylesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImgGallery);

export default StylesContainer;
