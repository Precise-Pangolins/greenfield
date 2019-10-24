import Redux from 'redux';

const getListReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LIST':
      console.log({ REDUCER: action.list });
      let obj = Object.assign([], state, action.list);
      return obj;
    default:
      return state;
  }
};

export default getListReducer;
