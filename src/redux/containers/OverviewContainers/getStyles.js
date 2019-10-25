import { connect } from 'react-redux';
import getStyles from '../../actionCreators/overview-action-creators/getStyles.js';
import ImgGallery from '../../../../client/components/overview-components/ImgGallery';
import Thumbnails from '../../../../client/components/overview-components/ImgGallery/Thumbnails.jsx';

const mapStateToProps = store => {
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
