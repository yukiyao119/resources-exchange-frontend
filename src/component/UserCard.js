import React, { useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAUser } from '../actions/UserActions'
import NewExchangeForm from './NewExchangeForm'
import { List } from 'semantic-ui-react'

const UserCard = (props) => {

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)

  const { username, bio, donated_hour, location, time_slot} = props.user
  // console.log("selected user", selectedUser, "props user", props.user)
  
  const [newXStatus, setnewXStatus] = useState({
    newX: false
  })

  const handleChange = (userObj) => {
    console.log("User Obj", userObj, "Current U", currentUser);
    if (userObj.id !== currentUser.id){
      setnewXStatus({
        ...newXStatus,
        newX: !newXStatus.newX
      })
      dispatch(selectAUser(userObj))
    } else {
      window.alert("Can not choose yourself!")
    }
  }

  return (
    <>
      <List divided relaxed>
      <List.Item>
        <List.Icon name='user' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header onClick={()=> handleChange(props.user)}>{username}</List.Header>
          <List.Description onClick={()=> handleChange(props.user)}>
            Bio: {bio} <br/>
            Donated hour: <strong>{donated_hour}</strong><br/>
            Location: {location} <br/>
            Open time: {time_slot}<br/></List.Description>
        </List.Content>
      </List.Item>
      </List>
    { newXStatus.newX === true ? <NewExchangeForm /> : null}
    </>
  )
}

// const userCardStyle={
//   border: "1px orange solid"
// }

export default UserCard 



// <div style={userCardStyle}>
// Username: {username}
// <br />
// <img src="./alpaca.jpg" alt="profilePic"/>
// <br />
// Bio: {bio}
// <br />
// Donated hour: {donated_hour}
// <br />
// Location: {location}
// <br />
// Open time: {time_slot}
// <br />
// <button onClick={()=> handleChange(props.user)}>Request an Xchange!</button>
// </div>