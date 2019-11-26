import React, { Component } from "react";
import { connect } from "react-redux";
import { userPostFetch } from "../actions"

const initialState = {
  username: "",
  password: "",
  img: "",
  bio: ""
};

class Signup extends Component {

  state = initialState;

  handleChange = event => {this.setState({[event.target.name]: event.target.value})}

  handleSubmit = event => {
    event.preventDefault();
    this.props.userPostFetch(this.state);
    console.log("created a new user!");
    // this.props.redirect("home");
    this.props.history.push('/')
  }


  render() {

    const { username, password, img, bio } = this.state

    return (
      <div style={formStyle}>
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up For An Account</h1>

          <label>Username</label>
          <input
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
          />
          <br />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
          <br />

          <label>Image</label>
          <input
            name="img"
            placeholder="Image (URL)"
            value={img}
            onChange={this.handleChange}
          />
          <br />

          <label>Bio</label>
          <textarea
            name="bio"
            placeholder="Bio"
            value={bio}
            onChange={this.handleChange}
          />
          <br />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
    // loginUser: userObj => ({ type: "LOGIN_USER",payload: userObj })
  };
};

const formStyle = {
  border: "2px yellow solid"
};

export default connect(null, mapDispatchToProps)(Signup);
