import React, { useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAUser } from '../actions/UserActions'
import NewExchangeForm from './NewExchangeForm'


const UserCard = (props) => {

  const dispatch = useDispatch()

  const { displayname, bio, donated_hour, img, location, time_slot} = props.user

  // console.log("selected user", selectedUser)
  
  const [newXStatus, setnewXStatus] = useState({
    newX: false
  })

  const handleChange = (userObj) => {
    setnewXStatus({
      ...newXStatus,
      newX: !newXStatus.newX
    })
    dispatch(selectAUser(userObj))
  }

  return (
    <>
    <div style={userCardStyle}>
      {displayname}
      <br />
      {img}
      <br />
      {bio}
      <br />
      {donated_hour}
      <br />
      {location}
      <br />
      {time_slot}
      <br />
    <button onClick={()=> handleChange(props.user)}>Request an Xchange!</button>
    </div>
    { newXStatus.newX === true ? <NewExchangeForm /> : null}
    
    </>
  )
}

const userCardStyle={
  border: "1px orange solid"
}

export default UserCard 
