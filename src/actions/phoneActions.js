export const fetchPhones = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_PHONES'})
        fetch('http://localhost:3000/api/phones')
        .then(response => {return response.json()})
        .then(responseJSON => {setTimeout(() => {
            dispatch({type: 'ADD_PHONES', phones: responseJSON})
          }, 3000)})
    }
}

