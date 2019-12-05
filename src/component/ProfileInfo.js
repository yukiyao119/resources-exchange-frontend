import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddSkillForm from './AddSkillForm'
import EditInfoForm from './EditInfoForm'
import { deleteThisSkill } from '../actions/SkillActions'
import { Segment, Grid, Card, Image, Icon, Container, Button } from 'semantic-ui-react'

const ProfileInfo = () => {
  const dispatch = useDispatch()
  
  const currentUser = useSelector(state => state.currentUser)
  console.log("currentUser", currentUser);
  
  const { displayname, donated_hour, time_slot, location, bio } = currentUser

  const handleRemove = (user_skill) => {
    dispatch(deleteThisSkill(user_skill))
  }
  
  const mySkillsText = currentUser.user_skills ? currentUser.user_skills.map(user_skill => {
    return user_skill.skill.name ? (
      <div key={user_skill.id}>
        <li key={user_skill.id}>{user_skill.skill.name}</li>
        <Button basic onClick={() =>handleRemove(user_skill)}
        size='mini' >Remove</Button>
      </div>
    ) : null
  })
  : null


  return (
  <Container>
    <Segment vertical>
    <Grid columns={3} divided>

      <Grid.Column width={5}>
        {/* <Grid.Row  */}
        <div>
          <Card>

            <Image src='/alpaca.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Name: {displayname}</Card.Header>
              <Card.Meta>
                <span className='date'>Donated hours: {donated_hour}</span>
              </Card.Meta>
              <Card.Description>
                Bio: {bio}<br />
                Location: {location}<br />
                Time slot: {time_slot}<br />
              </Card.Description>
            </Card.Content>
        
            {/* <Card.Content extra>
              <Icon name='user' />
              My skills: {mySkillsText}
            </Card.Content> */}

          </Card>
        </div>
      </Grid.Column>


      <Grid.Column width={5}>
        <Segment>
          <Icon name='user' />
          My skills: <br />
          {mySkillsText}
        </Segment>

        <Segment> 
          <AddSkillForm />
        </Segment>
      </Grid.Column>

      <Grid.Column width={5}>
        <Segment>
          <EditInfoForm />
        </Segment>
      </Grid.Column>

    </Grid>
    </Segment>
  </Container>
  )

}

const infoStyle = {
  border: "3px orange solid"
}

export default ProfileInfo



{/* <div style={infoStyle}>
      <div>
        <h2>Name: {displayname}</h2>
        <h2>Image: <br/>
          <img src="./alpaca.jpg" alt="profilePic"/></h2>
        <h2>bio: {bio}</h2>
        <h2>Location: {location}</h2>
        <h2>Time slot: {time_slot}</h2>
        <h2>Donated hours: {donated_hour}</h2>
        <h2>My skills: </h2>
      </div>
      <div>{mySkillsText}</div>
      <AddSkillForm />
      <EditInfoForm />

    </div> */}

  //   <div>
  //   <h2>Name: {displayname}</h2>
  //   <h2>Image: <br/>
  //     <img src="/alpaca.jpg" alt="profilePic"/></h2>
  //   <h2>Bio: {bio}</h2>
  //   <h2>Location: {location}</h2>
  //   <h2>Time slot: {time_slot}</h2>
  //   <h2>Donated hours: {donated_hour}</h2>
  //   <h2>My skills: </h2>
  // </div>
  // <div>{mySkillsText}</div>