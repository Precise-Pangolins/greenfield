import { connect } from "react-redux";
import QuestionForm from "../../../../client/components/qanda-components/QuestionForm.jsx";
import createNewQuestion from "../../actionCreators/QAActionCreators/createNewQ.js";


const mapDispatchToProps = dispatch => {
  return {
    createNewQuestion: product_id => dispatch(createNewQuestion(product_id));
  };
};

const QuestionFormContainer = connect(
  null,
  mapDispatchToProps
)(QuestionForm);

export default QuestionFormContainer;