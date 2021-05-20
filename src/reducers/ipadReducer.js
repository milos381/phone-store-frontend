
const ipadReducer = (state = {ipads: [], loading: false}, action) => {
    
    let ipadsAfterDelete;
    switch (action.type) {

        case 'LOADING_IPADS':
            
            return {
                ...state,
                ipads:[...state.ipads],
                loading: true
            }
            
        case 'ADD_IPADS':
            debugger
            return {
                ...state,
                ipads: action.ipads,
                loading: false
            }
        case 'CREATE_IPAD':
            const ipad = {
                id: action.ipad.id,
                make: action.ipad.make,
                model: action.ipad.model,
                price: action.ipad.price
            }
           return {...state, ipads: [...state.ipads, ipad]}
        case 'DELETE_IPAD':
            console.log('hits reducer')
           ipadsAfterDelete = state.ipads.filter(ipad => ipad.id !== action.ipad.id)
            
            return {...state, ipads: ipadsAfterDelete}
        default:
            return state;
    }
}
export default ipadReducer