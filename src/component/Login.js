import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLoginFetch } from '../actions/UserActions';

const Login = props => {

  const dispatch = useDispatch()

  // Setting up local state using the useState hook
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  })

  // controlled form functions
  const logInSubmitted = e => {
    e.preventDefault()
    dispatch(userLoginFetch(loginForm))
    props.history.push('/')
  };

  const onChange = e =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })

  // Destructuring keys from our local state to use in the form
  const { username, password } = loginForm

  // Component code
  return (
    <div style={formStyle}>
        <h1>Log in pls!</h1>
        <form onSubmit={logInSubmitted}>
          <input
            type="text"
            onChange={onChange}
            name="username"
            value={username}
          />
          <input
            type="password"
            onChange={onChange}
            name="password"
            value={password}
          />
          <input type="submit" />
        </form>
      </div>
  )
}

const formStyle = {
  border: "2px green solid"
}

export default Login


