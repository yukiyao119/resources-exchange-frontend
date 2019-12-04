import React from 'react';
import { useSelector } from 'react-redux'
import Skillboard from './Skillboard'


const Home = () => {

  // const dispatch = useDispatch()
  // useEffect(() => { dispatch(loadAllUsers()) }, [dispatch])
  
  const currentUser = useSelector(state => state.currentUser)
  
  const text = currentUser.username ? <h1>{currentUser.username} is currently logged in</h1>
    : <h1>Pls log in</h1>
 
  return (
    <React.Fragment >

      <div style={homeStyle} > 
        <div>{text}</div>
        <Skillboard />
      </div>
    </React.Fragment>
  )

}

const homeStyle = {
  border: "2px purple solid"
}

export default Home



// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import { getProfileFetch, loginUser } from '../actions'

// class Home extends Component {

//   componentDidMount(){
//     // console.log(this.props.loadCats)
//     this.props.getProfileFetch()
//   }

//   render() {
//     // debugger
//     return (
      
//         this.props.currentUser === undefined ? 
//         <div>Please Log in</div>
//         :
//         <div style={bodyStyle}>
//           <h1>Home Page. Welcome {this.props.currentUser.username}</h1>
//         </div>
//         // 
//     )
//   }
// }

// const bodyStyle = {
//   border: "2px pink solid"
// }

//       // <ul className="skill-container">
//       //   {
//       //     this.props.allSkills.map(skill => <Skill key={ skill.id } skill={ skill } />)
//       //   }
//       // </ul>

// const mapStateToProps = state => {
//   return {
//     currentUser: state.currentUser,
//     allSkills: state.allSkills
//   }
// }


// export default connect(mapStateToProps, { getProfileFetch, loginUser })(Home)