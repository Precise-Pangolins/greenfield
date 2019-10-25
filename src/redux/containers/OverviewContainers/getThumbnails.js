import { connect } from 'react-redux';
import getStyles from '../../actionCreators/overview-action-creators/getStyles.js';
import Thumbnails from '../../../../client/components/overview-components/ImgGallery/Thumbnails.jsx';

const mapStateToProps = store => {
  return { styles: store.styles };
};
const mapDispatchToProps = dispatch => {
  return {
    handleGetThumbnailsRequest: id => dispatch(getStyles(id))
  };
};

const ThumbnailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Thumbnails);

export default ThumbnailsContainer;
