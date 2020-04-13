import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userPostFetch } from '../actions/UserActions';
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import LoadingIndicator from './LoadingIndicator'

const Signup = routerProps => {
  const dispatch = useDispatch()

  const [signupForm, setSignupForm] = useState({
    username: '',
    password: '',
    donated_hour: 0,
    img: '/alpaca.png'
  })

  // Controlled form functions
  const handleChange = e =>
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(userPostFetch(signupForm, routerProps))
  }

  // Destructuring keys from our local state to use in the form
  const { username, password } = signupForm

  // Component code
  return (
    // <div style={homeStyle}>
          
  <Grid textAlign='center' style={{ 'height': '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/xxx.png' /> Sign Up
      </Header>
      <LoadingIndicator/>
      <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' 
          onChange={handleChange}
          name="username"
          autoComplete="off"
          value={username}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={handleChange}
            name="password"
            value={password}
          />
          <Button color='teal' fluid size='large' type="submit">
            Signup
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have account? Please log in.
        <Link to="/login" className="ui button">Login</Link>
      </Message>
    </Grid.Column>
  </Grid>
  // </div>
  )
}


// const homeStyle = {
//   // display: "inline-block",
//   width: "100%",
//   height: "600px",
//   backgroundImage: `url(${"/artem-beliaikin-v6kii3H5CcU-unsplash.jpg"})`,
//   backgroundSize: 'cover',
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   // zIndex: "9"
// }

export default Signup;

