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
export const createPhone = phone => {
  
  return dispatch => {
    return fetch(`http://localhost:3000/api/phones`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phone: phone })
    })
      .then(response => response.json())
      .then(phone => {
        dispatch(addPhone(phone))
        
      })
      .catch(error => console.log(error))
  }
}
export const addPhone = phone => {
  return {
    type: 'CREATE_PHONE',
    phone
  }
 } 

export const removePhone = (phone) => {
  
  return (dispatch) => {
    
    fetch(`http://localhost:3000/api/phones/${phone.id}`,{
      method: "DELETE"
      })
      .then(response => response.json())
      .then(response => {dispatch({ type: 'DELETE_PHONE', phone: response })})
      
  }
}


