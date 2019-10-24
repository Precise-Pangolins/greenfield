import Redux from 'redux';

const getStylesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_STYLES':
      console.log({ REDUCER: action.styles });
      let obj = Object.assign([], state, action.styles);
      return obj;
    default:
      return state;
  }
};

export default getStylesReducer;
