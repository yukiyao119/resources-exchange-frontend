import React from 'react';
import { useSelector } from 'react-redux'
import UserCard from '../component/UserCard'


const UserList = () => {

  
  const allUsers = useSelector(state => state.allUsers)
  // const currentUser = useSelector(state => state.currentUser)
  const selectedSkill = useSelector(state => state.selectedSkill)
  console.log("all users", allUsers);


  const filteredUsers = allUsers.filter(user => user.user_skill_names.includes(selectedSkill.name))
  console.log("filtered users", filteredUsers);
  
  const userItems = 
  // filteredUsers.empty ? (<h4>No all Users yet</h4>) : 
  filteredUsers.map(user => (<UserCard key={user.id} user={user}/>))


  return (

    <div style={userListStyle}>
      <h3>User List area, All users that have this skill. </h3>
      {userItems}
    </div>
    
  )
}

const userListStyle={
  border: "2px green solid"
}


export default UserList