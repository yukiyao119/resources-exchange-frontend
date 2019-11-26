import React, { Component } from "react";
import { connect } from 'react-redux';
// import { logoutUser } from '../actions'

class Home extends Component {

  // componentDidMount(){
  //   // console.log(this.props.loadCats)
  //   this.props.loadCats()
  // }

  render() {
    return (
      
        this.props.currentUser === undefined ? 
        <div>Please Log in</div>
        :
        <div style={bodyStyle}>
          <h1>Home Page. Welcome {this.props.currentUser.username}</h1>
        </div>

    )

  }

}

const bodyStyle = {
  border: "2px pink solid"
}

      // <ul className="skill-container">
      //   {
      //     this.props.allSkills.map(skill => <Skill key={ skill.id } skill={ skill } />)
      //   }
      // </ul>

const mapStateToProps = state => {
  return {
    allSkills: state.allSkills,
    currentUser: state.currentUser
  }
}

// const mapDispatchToProps = dispatch => ({
//   logoutUser: () => dispatch(logoutUser())
// })

export default connect(mapStateToProps)(Home)