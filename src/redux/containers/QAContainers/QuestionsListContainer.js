import { connect } from "react-redux";
import getAllQuestions from "../../actionCreators/QAActionCreators/getAllQuestions.js";
import QuestionsList from "../../../../client/components/qanda-components/QuestionsList.jsx";

const mapStateToProps = store => ({ questions: store.questions });

const mapDispatchToProps = dispatch => {
  return {
    getAllQuestionsRequest: () => dispatch(getAllQuestions())
  };
};

const QuestionsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsList);

export default QuestionsListContainer;
