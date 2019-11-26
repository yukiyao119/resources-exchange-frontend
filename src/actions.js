

// user sign up, make a new user
export const userPostFetch = user => dispatch => {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        if (data.token){
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(data.user))
        } else {
          console.log(data.errors)
        }
    })
}

// function loadSomeData(userId) {
//   return dispatch => fetch(`http://data.com/${userId}`)
//     .then(res => res.json())
//     .then(
//       data => dispatch({ type: 'LOAD_SOME_DATA_SUCCESS', data }),
//       err => dispatch({ type: 'LOAD_SOME_DATA_FAILURE', err })
//     );
// }


// user make a post to login
export const userLoginFetch = user => dispatch => 
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({user})
  })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.token = data.token
        localStorage.user_id = data.user_id
        dispatch(loginUser(data.user))
      } else {
        console.log(data.errors)
      }
    })
  

// user get to their own /profile
export const getProfileFetch = () => dispatch => {
    const token = localStorage.token
    if (token) {
      return fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        if (data.errors) {
          localStorage.removeItem("token")
        } else {
        dispatch(loginUser(data.user))
        }
      })
    }
  }


// make the current user: userObj
export const loginUser = userObj => ({
  type: "LOGIN_USER",
  payload: userObj
})

// clear the localstorage token
export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})