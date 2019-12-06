import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/UserActions'
import { Segment, Container, Menu, Image } from 'semantic-ui-react'

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
      <div >
        {/* <Segment className="ui inverted vertical center aligned teal"> */}
          {/* <Container> */}
            <Menu className="ui large secondary inverted pointing teal">
              <Image src='/xxx.png' size='mini'/>
              <Link to="/" className="toc item">
                {/* <i className="sidebar icon"></i> */}
              </Link>
              <Link to="/" className="item">Home</Link>
              <Link to="/find" className="item">Find</Link>
              <Link to="/profile" className="item">Profile</Link>
              <Link to="/" onClick={handleLogout} className="right item">Logout</Link>
            </Menu>
          {/* </Container> */}
        {/* </Segment> */}
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
