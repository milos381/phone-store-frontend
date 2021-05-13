const phoneReducer = (state = {phones: [], loading: false}, action) => {
    switch (action.type) {
        case 'LOADING_PHONES':
            console.log('loading phones')
            return {
                ...state,
                phones:[...state.phones],
                loading: true
            }
            
        case 'ADD_PHONES':
            
            return {
                ...state,
                phones: action.phones,
                loading: false
            }
        default:
            return state;
    }
}
export default phoneReducer