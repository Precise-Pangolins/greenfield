import Redux from 'redux';

const getListReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LIST':
      let obj = Object.assign([], state, { list: action.payload });
      return obj;
    default:
      return state;
  }
};

export default getListReducer;

// state = {
//   products: []
//   selectedStyle: {}
//   selectedProduct:{}
// }

// // UPDATE_SELECTED_PRODUCT
// // FETCH_LIST_PRODUCTS
// // UPDATE_SELECTED_STYLE

// function modifyMyState(state, action) {

//   switch(action.type) // UPDATE_SELECTED_PRODUCT // FETCH_LIST_PRODUCTS // UPDATE_SELECTED_STYLE

//         {

//         case 'UPDATE_SELECTED_PRODUCT' : {

//             return {
//               ...state,
//               selectedProduct: action.payload,
//             }
//           break;
//         }
//         case 'FETCH_LIST_PRODUCTS': {
//           return {
//             ...state,
//             products: action.payload,
//           }
//           break;
//         }
//         case 'UPDATE_SELECTED_STYLE': {
//           return {
//             ...state,
//             selectedStyle: action.payload,
//           }
//           break;
//         }

//         }

// }
