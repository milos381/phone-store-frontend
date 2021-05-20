export const fetchIpads = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_IPADS'})
        fetch('http://localhost:3000/api/ipads')
        .then(response => {return response.json()})
        .then(responseJSON => {setTimeout(() => {
            dispatch({type: 'ADD_IPADS', ipads: responseJSON})
          }, 3000)})
    }
}
export const createIpad = ipad => {
  
  return dispatch => {
    return fetch(`http://localhost:3000/api/ipads`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ipad: ipad })
    })
      .then(response => response.json())
      .then(ipad => {
        dispatch(addIpad(ipad))
        
      })
      .catch(error => console.log(error))
  }
}
export const addIpad = ipad => {
  return {
    type: 'CREATE_IPAD',
    ipad
  }
 } 

export const removeIpad = (ipad) => {
  
  return (dispatch) => {
    
    fetch(`http://localhost:3000/api/ipads/${ipad.id}`,{
      method: "DELETE"
      })
      .then(response => response.json())
      .then(response => {dispatch({ type: 'DELETE_IPAD', ipad: response })})
      
  }
}


