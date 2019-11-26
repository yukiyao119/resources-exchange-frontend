import React, { Component } from "react";
import { connect } from 'react-redux';
import { userLoginFetch } from '../actions';

class Login extends Component {
  
  state = {
    username: "",
    password: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    }, ()=> {console.log(this.state);
    })
  }

  logInSubmitted = (event) => {
    event.preventDefault()
    this.props.userLoginFetch(this.state)
    this.props.history.push('/')

  }

  render() {

    return (
      <div style={formStyle}>
        <h1>Log in pls!</h1>
        <form onSubmit={this.logInSubmitted}>
          <input
            type="text"
            onChange={this.onChange}
            name="username"
            value={this.state.username}
          />
          <input
            type="password"
            onChange={this.onChange}
            name="password"
            value={this.state.password}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const formStyle = {
  border: "2px green solid"
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo)),
  // loginUser: userObj => ({ type: "LOGIN_USER",payload: userObj })
})

export default connect(null, mapDispatchToProps)(Login);