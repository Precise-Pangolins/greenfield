import { connect } from 'react-redux';
import getAllAnswers from '../../actions/QAActionCreators/getAllAnswers';
import AnswersList from '../../../../client/components/qanda-components/AnswersList.jsx';

const mapStateToProps = store => ({ answers: store.answers });

const mapDispatchToProps = dispatch => {
  return {
    getAllAnswersRequest: question_id => dispatch(getAllAnswers(question_id))
  };
};

const AnswersListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswersList);

export default AnswersListContainer;
