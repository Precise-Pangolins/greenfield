import Redux from 'redux';

const getStylesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_STYLES':
      let obj = Object.assign([], state, action.styles);
      return obj;
    default:
      return state;
  }
};

export default getStylesReducer;
