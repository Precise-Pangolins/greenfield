import { connect } from "react-redux";
import getAllQuestions from "../../actionCreators/QAActionCreators/getAllQuestions.js";
import QuestionsList from "../../../../client/components/qanda-components/QuestionsList.jsx";

const mapStateToProps = store => ({ questions: store.questions });

const mapDispatchToProps = dispatch => {
  return {
    getAllQuestionsRequest: product_id => dispatch(getAllQuestions(product_id))
  };
};

const QuestionsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsList);

export default QuestionsListContainer;
