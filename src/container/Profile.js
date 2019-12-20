import React from 'react';
// import { useSelector } from 'react-redux'
// import { getProfileFetch } from '../actions/UserActions'
import ProfileInfo from '../component/ProfileInfo'
import ExchangeList from './ExchangeList'
import DoneList from './DoneList'
import { Container } from 'semantic-ui-react'


const Profile = () => {
         
    // const currentUser = useSelector(state => state.currentUser)
    
    return (
        <>
        <Container>

        <Container >
            <ProfileInfo />
        </Container>

        <Container >
            <div style={segmentStyle}>
                <ExchangeList />
            </div>
            <div style={segmentStyle}>
                <DoneList />
            </div>
        </Container>

        </Container>
        </>
    )

}

const segmentStyle = {
    margin: '10px',
    display: "flex",
    justifyContent: "center"
  }

export default Profile


// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import { getProfileFetch, logoutUser } from '../actions'

// class Profile extends Component {
//     // state = {
//     //     username: ""
//     // }
    
//     componentDidMount(){
//         this.props.getProfileFetch()
//     }

//     handleClick = () => {
//         localStorage.clear()
//         this.props.redirect('login')
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick}>Logout</button>
//                 {
//                     this.state.username ? 
//                     <h1> Profile page! {this.state.username}! </h1> 
//                     :
//                     <h1>getting your info...</h1>
//                 }
//             </div>
//         );
//     }

// }

// const mapStateToProps = state => {
//     return {
//       mySkills: state.mySkills,
//       currentUser: state.currentUser
//     }
//   }
  
// const mapDispatchToProps = dispatch => ({
//     getProfileFetch: () => dispatch(getProfileFetch()),
//     logoutUser: () => dispatch(logoutUser())
// })



// export default connect(mapStateToProps, mapDispatchToProps)(Profile)