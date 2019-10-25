import Redux from 'redux';

const getInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_INFO':
      let obj = Object.assign({}, state, action.info);
      return obj;
    default:
      return state;
  }
};

export default getInfoReducer;
