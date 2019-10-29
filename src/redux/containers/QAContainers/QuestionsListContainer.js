import { connect } from "react-redux";
import getAllQuestions from "../../actionCreators/QAActionCreators/getAllQuestions.js";
import QuestionsList from "../../../../client/components/qanda-components/QuestionsList.jsx";
import getAllAnswers from "../../actionCreators/QAActionCreators/getAllQuestions.js";

const mapStateToProps = store => ({ questions: store.questions });

const mapDispatchToProps = dispatch => {
  return {
    getAllQuestionsRequest: product_id => dispatch(getAllQuestions(product_id)),
    getAllAnswersRequest: product_id => dispatch(getAllAnswers(product_id))
  };
};

const QuestionsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsList);

export default QuestionsListContainer;
