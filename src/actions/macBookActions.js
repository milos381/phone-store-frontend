export const fetchMacBooks = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_MACBOOKS'})
        fetch('http://localhost:3000/api/macbooks')
        .then(response => {return response.json()})
        .then(responseJSON => {setTimeout(() => {
            dispatch({type: 'ADD_MACBOOKS', macbooks: responseJSON})
          }, 3000)})
    }
}
export const createMacbook = macbook => {
  
  return dispatch => {
    return fetch(`http://localhost:3000/api/macbooks`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ macbook: macbook })
    })
      .then(response => response.json())
      .then(macbook => {
        dispatch(addMacBook(macbook))
        
      })
      .catch(error => console.log(error))
  }
}
export const addMacBook = macbook => {
  return {
    type: 'CREATE_MACBOOK',
    macbook
  }
 } 

export const removeMacBook = (macbook) => {
  
  return (dispatch) => {
    
    fetch(`http://localhost:3000/api/macbooks/${macbook.id}`,{
      method: "DELETE"
      })
      .then(response => response.json())
      .then(response => {dispatch({ type: 'DELETE_MACBOOK', macbook: response })})
      
  }
}


