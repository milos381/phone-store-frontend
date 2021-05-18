import uuid from 'uuid';
const phoneReducer = (state = {phones: [], loading: false}, action) => {
    switch (action.type) {
        case 'LOADING_PHONES':
            
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
        case 'CREATE_PHONE':
            const phone = {
                id: uuid(),
                make: action.phone.make,
                model: action.phone.model,
                price: action.phone.price
            }
            console.log({...state, phones: [...state.phones, phone]})
           return {...state, phones: [...state.phones, phone]}
        default:
            return state;
    }
}
export default phoneReducer