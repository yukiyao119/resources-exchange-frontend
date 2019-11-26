const loginURL = 'http://localhost:3000/login'

// user sign up, make a new user
export const userPostFetch = user => dispatch => {
  const object = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
    }
  fetch("http://localhost:3000/users", object)
    .then(res => res.json())
    .then(data => {
        if (data.token){
          dispatch(loginUser(data.user))
          localStorage.setItem("token", data.jwt)
        } else {
          console.log(data.errors)
        }
    })
}


export const userLoginFetch = (user) => dispatch => {
    const object = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(user)
    }
    fetch(loginURL, object)
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        dispatch(loginUser(data.user))
        localStorage.token = data.token
        localStorage.user_id = data.user_id
      } else {
        console.log(data.errors)
      }
    })
}
  

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
        dispatch(loginUser(data))
        // debugger
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