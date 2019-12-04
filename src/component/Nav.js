import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/UserActions'
import '../nav.css'

const Nav = () => {
  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.loggedIn)

  const handleLogout = () => {
    dispatch(logoutUser())
  }
  
  return (
    <>
      
    { loggedIn ? 
    <>
      <div className="pusher">
        <div className="ui inverted vertical masthead center aligned segment">
          <div className="ui container">
            <div className="ui large secondary inverted pointing menu">
              <Link to="/" className="toc item">
                <i className="sidebar icon"></i>
              </Link>
              <Link to="/" className="item">Home</Link>
              <Link to="/find" className="item">Find nearby</Link>
              <Link to="/profile" className="item">Profile</Link>
              <Link to="/" onClick={handleLogout} className="item">
                Logout
              </Link>
            </div>
          </div>
        
          
          <div className="ui text container">
            <h1 className="ui inverted header">
              Resources Xchange
            </h1>
            <h2>Learn new skills another way.</h2>
            {/* <div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div> */}
          </div>

        </div>
      </div>
    </>

    :
    
    <>
      <div className="pusher">
        <div className="ui inverted vertical masthead center aligned segment">
          <div className="ui container">
            <div className="ui large secondary inverted pointing menu">
              <div className="right item">
                <Link to="/signup" className="ui inverted button">Signup</Link>
                <Link to="/login" className="ui inverted button">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    }

    </>
  )
}

// const navStyle = {
//   border: "1px grey solid",
//   display: "flex",
//   justifyContent: "space-evenly"
// }

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
