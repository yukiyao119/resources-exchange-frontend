import React, { useState }  from 'react'
import { useDispatch } from 'react-redux'
import { selectAUser } from '../actions/UserActions'
import NewExchangeForm from './NewExchangeForm'
import { Button, Card, Image } from 'semantic-ui-react'

const UserCard = (props) => {

  const dispatch = useDispatch()

  const { username, bio, donated_hour, location, time_slot} = props.user
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
    <Card.Group >
      <Card >
        <Card.Content>
          <Image
            floated='left'
            size='tiny'
            src='/alpaca.jpg'
          /><br/><br/>
          <Card.Header>{username}</Card.Header>
          <Card.Meta>Recommended users</Card.Meta>
          <Card.Description>
          Bio: {bio} <br/>
          Donated hour: <strong>{donated_hour}</strong><br/>
          Location: {location} <br/>
          Open time: {time_slot}<br/>
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <Button animated='fade' onClick={()=> handleChange(props.user)}>
          <Button.Content visible>Continue!</Button.Content>
          <Button.Content hidden>Xchange!</Button.Content>
        </Button>
        </Card.Content>
        
      </Card>
    </Card.Group>
    
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