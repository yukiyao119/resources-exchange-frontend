import React, { useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAUser } from '../actions/UserActions'
import NewExchangeForm from './NewExchangeForm'
import { List, Header } from 'semantic-ui-react'

const UserCard = (props) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)
  
  const { username, bio, donated_hour, location, time_slot} = props.user

  const [newXStatus, setnewXStatus] = useState({
    newX: false
  })
  
  const handleChange = (userObj) => {
    console.log("User Obj", userObj, "Current U", currentUser);
    if (userObj.id !== currentUser.id && currentUser.user_skills.length > 0){
      setnewXStatus({
        ...newXStatus,
        newX: !newXStatus.newX
      })
      dispatch(selectAUser(userObj))
    } else if (currentUser.user_skills.length <= 0) {
      window.alert("Please go to Profile page to fill in your information and choose your skills")
      props.history.push('/profile')
    } else {
      window.alert("Can not choose yourself!")
    }
  }

  return (
    <>
      <List divided relaxed>
      <List.Item>
        <List.Icon name='user' size='large' verticalAlign='middle' />
        <List.Content id="cardPointer">
          <Header as='h5' color='purple' onClick={()=> handleChange(props.user)}>{username}</Header>
          <List.Description onClick={()=> handleChange(props.user)}>
            <strong>Bio: </strong> {bio} <br/>
            <strong>Location: </strong> {location} <br/>
            <strong>Donated hour: </strong> {donated_hour}<br/>
            <strong>Open time: </strong> {time_slot}<br/></List.Description>
        </List.Content>
      </List.Item>
      </List>
    { newXStatus.newX === true ? <NewExchangeForm /> : null}
    </>
  )
}


export default UserCard 
