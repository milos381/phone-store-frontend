
// const macbookReducer = (state = {macbooks: [], loading: false}, action) => {
//     switch (action.type) {
//         case 'LOADING_MACBOOKS':
            
//             return {
//                 ...state,
//                 macbooks:[...state.macbooks],
//                 loading: true
//             }
//             case 'ADD_MACBOOKS':
//                 return {
//                     ...state,
//                     macbooks: action.macbooks,
//                     loading: false
//                 }
//         default:
//             return state;
//     }
// }
// export default macbookReducer