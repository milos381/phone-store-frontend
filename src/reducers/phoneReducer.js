
const phoneReducer = (state = {phones: [], loading: false}, action) => {
    let phonesAfterDelete;
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
                id: action.phone.id,
                make: action.phone.make,
                model: action.phone.model,
                price: action.phone.price
            }
            console.log({...state, phones: [...state.phones, phone]})
           return {...state, phones: [...state.phones, phone]}
        case 'DELETE_PHONE':
            console.log('hits reducer')
            phonesAfterDelete = state.phones.filter(phone => phone.id !== action.phone.id)
            
            return {...state, phones: phonesAfterDelete}
        default:
            return state;
    }
}
export default phoneReducer