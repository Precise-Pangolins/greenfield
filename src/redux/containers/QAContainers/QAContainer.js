import { connect } from "react-redux";
import getAllQuestions from "../../actionCreators/QAActionCreators/getAllQuestions";
import QABody from "../../../../client/components/qanda-components/QABody.jsx";
import getAllAnswers from "../../actionCreators/QAActionCreators/getAllQuestions";

const mapStateToProps = store => ({
  questions: store.questions
  // answers: store.answers
});

const mapDispatchToProps = dispatch => {
  return {
    getAllQuestionsInitialRequest: product_id =>
      dispatch(getAllQuestions(product_id)),
    getAllAnswersInitialRequest: question_id =>
      dispatch(getAllAnswers(question_id))
  };
};

const QAContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QABody);

export default QAContainer;
