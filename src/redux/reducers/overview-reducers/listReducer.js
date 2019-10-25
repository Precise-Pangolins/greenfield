import Redux from 'redux';

const getListReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LIST':
      let obj = Object.assign([], state, action.list);
      return obj;
    default:
      return state;
  }
};

export default getListReducer;
