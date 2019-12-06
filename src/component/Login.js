import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLoginFetch } from '../actions/UserActions';
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

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
    props.history.push('/profile')
    
  }

  const onChange = e =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })

  // Destructuring keys from our local state to use in the form
  const { username, password } = loginForm

  // Component code
  return (

    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/xxx.png' /> Log-in to your account
        </Header>
        <Form size='large' onSubmit={logInSubmitted}>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' 
            onChange={onChange}
            name="username"
            value={username}/>
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={onChange}
              name="password"
              value={password}
            />

            <Button color='teal' fluid size='large' type="submit">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? 
          <Link to="/signup" className="ui button">Signup</Link>
        </Message>
      </Grid.Column>
    </Grid>

  )
}

const formStyle = {
  border: "2px green solid"
}

export default Login


