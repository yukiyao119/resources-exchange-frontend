const deployment = 'http://localhost:3000/'
// const deployment = 'https://resources-exchange-backend.herokuapp.com/'

// clear the localstorage token
export const clearUserAction = () => ({
  type: 'LOGOUT_USER'
})

// make the current user: userObj
export const loginUser = userObj => ({
  type: "LOGIN_USER",
  payload: userObj
})

// user log out,
export const logoutUser = () => dispatch => {
  dispatch(clearUserAction())
  localStorage.clear()
}


// user sign up, make a new user
export const userPostFetch = (user, routerProps) => dispatch => {
  const object = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
    }
  fetch(`${deployment}users`, object)
    .then(res => res.json())
    .then(data => {
      if (data.errors){
        window.alert(data.errors)
        routerProps.history.push('/')
      } else {
        localStorage.setItem("token", data.token)
        dispatch(loginUser(data.user))
        window.alert("Don't forget to fill in your information!")
        routerProps.history.push('/profile')
      }
    })
}


export const userLoginFetch = (user, routerProps) => dispatch => {
    const object = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    }
    fetch(`${deployment}login`, object)
    .then(res => res.json())
    .then(data => {
      if (data.errors) {
        window.alert(data.errors)
        routerProps.history.push('/login')
      } else {
        localStorage.setItem("token", data.token)
        dispatch(loginUser(data.user))
        routerProps.history.push('/')
      }
    })
}


// user get to their own /profile
export const getProfileFetch = () => dispatch => {
  const token = localStorage.token
  if (token) {
    return fetch(`${deployment}profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(existingUser => {
      // existingUser has a token key, has a user key
      // message key?
      existingUser.user ? 
      dispatch(loginUser(existingUser.user)) :
      localStorage.removeItem("token")
    })
  }
}


// fetch all the users
export const loadUsers = allUsers => ({
  type: "LOAD_USERS",
  payload: allUsers
})

export const loadAllUsers = () => dispatch => {
  const token = localStorage.token
  if (token) {
    fetch(`${deployment}users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        // Authorization: `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      // debugger
      dispatch(loadUsers(data))
    })
  }
}


// edit/update this cur user info
export const editProfile = user => ({
  type: "EDIT_PROFILE",
  payload: user
})

export const editProfileInfo = (user, user_id) => dispatch => {
  const token = localStorage.token
  if (token) {
    fetch(`${deployment}users/${user_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(data => {
      // debugger
      dispatch(editProfile(data.user))
    })
  }
}


// select a user to have exchange, change state selectedUser 
export const selectUser = user => ({
  type: "SELECT_USER",
  payload: user
})

export const selectAUser = (user) => dispatch => {
  dispatch(selectUser(user))
}


// // increase exchangee's donated hour
// export const increaseHour = () => ({
//   type: "INCREASE_HOUR",
//   // payload: 1
// })

// export const increaseDonatedHour = (user) => dispatch => {
//   dispatch(increaseHour(user))
// }
