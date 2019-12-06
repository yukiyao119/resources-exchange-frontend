import React from 'react';
import { useSelector } from 'react-redux'
import UserCard from '../component/UserCard'
import { Container, Grid, Header } from 'semantic-ui-react'

const UserList = () => {

  
  const allUsers = useSelector(state => state.allUsers)
  // const currentUser = useSelector(state => state.currentUser)
  const selectedSkill = useSelector(state => state.selectedSkill)
  console.log("all users", allUsers)

// skill: {id: 3, name: "Mandarin"}
  const skill = {id: selectedSkill.id, name: selectedSkill.name}
  console.log("skill", skill);
  

  const checkIncludes = (user_skills_arr, skillObj) => {
    if (user_skills_arr.filter(element => element.skill.name === skillObj.name).length > 0) {
      return true
    } else {
      return false
    }
  }

  const filteredUsers = allUsers.filter(user => {
    // console.log("check includes", checkIncludes(user.user_skills, skill))
    if ( checkIncludes(user.user_skills, skill) ) {
      return user
    } else {
      return null
    }
  })
  console.log("filtered users", filteredUsers);
  
  const userItems = 
  // filteredUsers.empty ? (<h4>No all Users yet</h4>) : 
  filteredUsers.map(user => (<UserCard key={user.id} user={user}/>))

  return (

    <Container>
      <br/>
      <Header as="h1">Available Users</Header>
      <Grid >
        {userItems}
      </Grid>
    </Container>
    
  )
}

const userListStyle={
  border: "2px green solid"
}


export default UserList