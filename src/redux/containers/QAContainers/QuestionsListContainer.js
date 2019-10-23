import { connect } from "react-redux";
import QuestionsList from "../../../../client/components/qanda-components/QuestionsList.jsx";
import loadQsList from "../../actions/QAActions/loadQs";

const mapStateToProps = store => ({ questions: store.questions });

//does not need mapDispatchToProps.

const QuestionsListContainer = connect(
  mapStateToProps,
  null
)(QuestionsList);

export default QuestionsListContainer;
