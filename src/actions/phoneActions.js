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
// export const removePhone = id => {
//   return dispatch => {
//     return fetch(`http://localhost:3000/api/phones/${id}`, {
//       method: "DELETE",
//       headers: {
//         'Content-Type': 'application/json',
//         "Accept": "application/json"
//       }
//     })
//       .then(response => console.log(response.json()))
//       .then(id => {
//         dispatch({type: "DELETE_PHONE"})
        
//       })
//       .catch(error => console.log(error))
//   }
// }

// export const removePhone = (phone) => {

//   let configObj = {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   }
  
//   return (dispatch) => {
    
//     fetch(`http://localhost:3000/api/phones/${phone.id}`, configObj)
//       .then(resp => resp.json())
//       .then(data => {
//         dispatch(deletePhone(data.id))
//       })
//   }  
// }
// export const deletePhone = id => {
//   return {
//     type: 'DELETE_PHONE',
//     id
//   }
//  } 
export const removePhone = (phone) => {
  return (dispatch) => {
    
    fetch(`http://localhost:3000/api/phones/${phone.id}`,{
      method: "DELETE",
      headers:
      {
        "Content-Type": "application/json"
      }
      })
      .then(response => {
        return response.json()
      })
      .then(response => {
        dispatch({ type: 'DELETE_PHONE', phone: response })
      })
  }
}


