import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userPostFetch } from '../actions/UserActions';

const Signup = props => {
  const dispatch = useDispatch()

  const [signupForm, setSignupForm] = useState({
    username: '',
    password: ''
  })

  // Controlled form functions
  const handleChange = e =>
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(userPostFetch(signupForm))
    props.history.push('/')
  }

  // Destructuring keys from our local state to use in the form
  const { username, password } = signupForm

  // Component code
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h1>Signup Page</h1>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
      />
{/* 
      <input
        type="text"
        name="img"
        value={img}
        onChange={handleChange}
        placeholder="Image Url"
      />

      <input
        type="text"
        name="bio"
        value={bio}
        onChange={handleChange}
        placeholder="Bio"
      /> */}
      <input type="submit" />
    </form>
  )
}

const formStyle = {
  border: "2px yellow solid"
}

export default Signup;



// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { userPostFetch } from "../actions"

// const initialState = {
//   username: "",
//   password: "",
//   img: "",
//   bio: ""
// };

// class Signup extends Component {

//   state = initialState;

//   handleChange = event => {this.setState({[event.target.name]: event.target.value})}

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.userPostFetch(this.state);
//     console.log("created a new user!");
//     // this.props.redirect("home");
//     this.props.history.push('/')
//   }


//   render() {

//     const { username, password, img, bio } = this.state

//     return (
//       <div style={formStyle}>
//         <form onSubmit={this.handleSubmit}>
//           <h1>Sign Up For An Account</h1>

//           <label>Username</label>
//           <input
//             name="username"
//             placeholder="Username"
//             value={username}
//             onChange={this.handleChange}
//           />
//           <br />

//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={this.handleChange}
//           />
//           <br />

//           <label>Image</label>
//           <input
//             name="img"
//             placeholder="Image (URL)"
//             value={img}
//             onChange={this.handleChange}
//           />
//           <br />

//           <label>Bio</label>
//           <textarea
//             name="bio"
//             placeholder="Bio"
//             value={bio}
//             onChange={this.handleChange}
//           />
//           <br />

//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
//     // loginUser: userObj => ({ type: "LOGIN_USER",payload: userObj })
//   };
// };



// export default connect(null, mapDispatchToProps)(Signup);
