import Redux from 'redux';
import LOAD_ALL_ANSWERS from '../../actions/QAActions/aActions';

const initialState = {
  answers = []
};

export function answersListReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOAD_ALL_ANSWERS':
      let obj = Object.assign([], state, action.questions.answers);
      return obj;
    default:
      return state;
  }
}