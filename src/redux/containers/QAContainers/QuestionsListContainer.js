import { connect } from "react-redux";
import getAllQuestions from "../../actionCreators/QAActionCreators/getAllQuestions.js";
import QuestionsList from "../../../../client/components/qanda-components/QuestionsList.jsx";
import getAllAnswers from "../../actionCreators/QAActionCreators/getAllQuestions.js";
import markQHelpful from "../../actionCreators/QAActionCreators/markQuestionHelpful.js";
import markAHelpful from "../../actionCreators/QAActionCreators/markAnswerHelpful.js";

const mapStateToProps = store => ({ questions: store.questions });

const mapDispatchToProps = dispatch => {
  return {
    getAllQuestionsRequest: (product_id, page, count) =>
      dispatch(getAllQuestions(product_id, page, count)),
    getAllAnswersRequest: (product_id, page, count) =>
      dispatch(getAllAnswers(product_id, page, count)),
    markQuestionHelpful: question_id => dispatch(markQHelpful(question_id)),
    markAnswerHelpful: answer_id => dispatch(markAHelpful(answer_id))
  };
};

const QuestionsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsList);

export default QuestionsListContainer;
