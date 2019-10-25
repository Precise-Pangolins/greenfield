import { connect } from "react-redux";
import getAllQuestions from "../../actionCreators/QAActionCreators/getAllQuestions";
import QABody from "../../../../client/components/qanda-components/QABody.jsx";

const mapStateToProps = store => ({ questions: store.questions });

const mapDispatchToProps = dispatch => {
  return {
    getAllQuestionsInitialRequest: product_id =>
      dispatch(getAllQuestions(product_id))
  };
};

const QAContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QABody);

export default QAContainer;
