// export const updateSignupForm = formData => {
//     return {
//       type: "UPDATE_SIGNUP_FORM",
//       formData
//     }
// }
  
// export const resetSignupForm = () => {
//     return {
//       type: "RESET_SIGNUP_FORM"
//     }
// }
// export const updateLoginForm = (formData) => {
//     return {
//       type: "UPDATE_LOGIN_FORM",
//       formData
//     }
// }
  
// export const resetLoginForm = () => {
//     return {
//       type: "RESET_LOGIN_FORM"
//     }
// }
export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
}
  
// export const clearCurrentUser = () => {
//     return {
//       type: "CLEAR_CURRENT_USER"
//     }
// }
// export const getCurrentUser = () => {
//     return dispatch => {
//         return fetch('http://localhost:3000/api/get_current_user', {
//             credentials: "include",
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json"
//             },
//         })
//         .then(response => response.json())
//         .then(response => {dispatch({ type: 'ADD_CURRENT_USER', user: response.user })})
//     }
// }

// export const signup = (credentials) => {
//     return dispatch => {
//       const userInfo = {
//         user: credentials
//       }
//       return fetch("http://localhost:3001/api/signup", {
//         credentials: "include",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(userInfo)
//       })
//         .then(r => r.json())
//         .then(response => {
//             dispatch(setCurrentUser(response.data))
//             dispatch(resetSignupForm())
//         })
//         .catch(console.log)
//     }
//   }
//   export const login = (credentials) => {
//     return dispatch => {
//       return fetch("http://localhost:3001/api/login", {
//         credentials: "include",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(credentials)
//       })
//         .then(r => r.json())
//         .then(response => {
//             dispatch(setCurrentUser(response.data))
//             dispatch(resetLoginForm())
//         })
//     }
//   }
//   export const logout = event => {
//     return dispatch => {
//       dispatch(clearCurrentUser())
//       return fetch('http://localhost:3001/api/logout', {
//         credentials: "include",
//         method: "DELETE"
//       })
//     }
//   }
export const getCurrentUser = () => {
  return (dispatch) => {
      dispatch({type: 'LOAD_GET_CURRENT_USER'})
      fetch('http://localhost:3000/api/get_current_user')
      .then(response => {return response.json()})
      .then(responseJSON => {setTimeout(() => {
          dispatch({type: 'ADD_CURRENT_USER', user: responseJSON})
        }, 1000)})
  }
}
export const signup = user => {
  
  return dispatch => {
    return fetch(`http://localhost:3000/api/signup`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user })
    })
      .then(response => response.json())
      .then(user => {
        dispatch(addUser(user))
        
      })
      .catch(error => console.log(error))
  }
}
export const addUser = user => {
  return {
    type: 'CREATE_USER',
    user
  }
 } 

