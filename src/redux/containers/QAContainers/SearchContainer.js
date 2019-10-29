import { connect } from "react-redux";
import SearchBar from "../../../../client/components/qanda-components/SearchBar.jsx";

const mapStateToProps = store => ({ questions: store.questions });

const SearchContainer = connect(
  mapStateToProps,
  null
)(SearchBar);

export default SearchContainer;
