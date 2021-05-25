const reducers = (state = {phones: [], ipads: [], macbooks: [], users: [], token: localStorage.getItem("token"), loading: false}, action) => {
    let macbooksAfterDelete;
    let phonesAfterDelete;
    let ipadsAfterDelete;
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
        case 'LOADING_IPADS':
            console.log(action)
            return {
                ...state,
                ipads:[...state.ipads],
                loading: true
            }
                
        case 'ADD_IPADS':
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
        case 'LOADING_MACBOOKS':
            
            return {
                ...state,
                macbooks:[...state.macbooks],
                loading: true
            }
        case 'ADD_MACBOOKS':
                return {
                    ...state,
                    macbooks: action.macbooks,
                    loading: false
                }  
        case 'CREATE_MACBOOK':
            const macbook = {
                id: action.macbook.id,
                make: action.macbook.make,
                model: action.macbook.model,
                price: action.macbook.price
            }
            return {...state, macbooks: [...state.macbooks, macbook]}
        case 'DELETE_MACBOOK':
            macbooksAfterDelete = state.macbooks.filter(macbook => macbook.id !== action.macbook.id)
                
            return {...state, macbooks: macbooksAfterDelete}  
    
        default:
            return state;
    }
}
export default reducers