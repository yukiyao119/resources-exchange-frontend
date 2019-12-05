import React from 'react';
import { useSelector } from 'react-redux'
// import { getProfileFetch } from '../actions/UserActions'
import ProfileInfo from '../component/ProfileInfo'
import ExchangeList from './ExchangeList'
import DoneList from './DoneList'
import { Segment, Grid, Form, Button, Container } from 'semantic-ui-react'


const Profile = () => {
         
    const currentUser = useSelector(state => state.currentUser)
    
    return (
        <>
        <Container>

        <Container >
            <ProfileInfo />
        </Container>

        <Container >
        {/* <div className="ui padded equal width grid"> */}
            {/* <div className="eight wide column"> */}
                <ExchangeList />
            {/* </div> */}
            {/* <div className="eight wide column"> */}
                <DoneList />
            {/* </div> */}
        {/* </div> */}
        </Container>

        </Container>
        </>
    )

}

const profileStyle = {
    border: "1px blue solid"
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