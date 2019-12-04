import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/UserActions'

const Nav = () => {
  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.loggedIn)

  const handleLogout = () => {
    dispatch(logoutUser())
  }
  
  return (
    <>
      { loggedIn ? 
      <nav style={navStyle}>
        <Link to="/">Home</Link>
        <Link to="/find">Find nearby</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      </nav>
      :
      <nav style={navStyle}>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </nav>
      }
    </>
  )
}

const navStyle = {
  border: "1px grey solid",
  display: "flex",
  justifyContent: "space-evenly"
}

export default Nav;



// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from 'react-redux';
// // import { useDispatch } from 'react-redux';
// import {logoutUser} from "../actions";

// class Nav extends Component {

//     handleLogout = (e) => {
//         e.preventDefault()
//         if(localStorage.token){
//             localStorage.removeItem("token")
//         }
//         this.props.logoutUser()
//     }

//   render() {
//     return (
      // <nav style={navStyle}>
      //   <Link to="/">Home</Link>
      //   <Link to="/signup">Signup</Link>
      //   <Link to="/login">Login</Link>
      //   <div>
      //   {this.props.currentUser === undefined ? 
      //     null
      //     : 
      //     <Link to="/" onClick={this.handleLogout}>Logout</Link>
      //   }
      //   </div>
      // </nav>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         logoutUser: () => dispatch(logoutUser())
//     }
// }

// const navStyle = {
//   border: "2px grey solid",
//   display: "flex",
//   justifyContent: "space-evenly"
// };

// export default connect(null, mapDispatchToProps)(Nav)
// //   const btnStyle = {
// //     background: '#ff0000',
// //     color: '#fff',
// //     border: 'none',
// //     padding: '5px 9px',
// //     borderRadius: '50%',
// //     cursor: 'pointer',
// //     float: 'right'
// //   }
