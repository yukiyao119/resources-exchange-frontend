import React from 'react'
import NewExchangeForm from './NewExchangeForm'


const UserCard = (props) => {

  const { displayname, bio, donated_hour, img, location, time_slot} = props.user

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
    </div>
    
      <NewExchangeForm />
    
    </>
  )
}

const userCardStyle={
  border: "1px orange solid"
}

export default UserCard 
