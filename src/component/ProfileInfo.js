import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddSkillForm from './AddSkillForm'
import EditInfoForm from './EditInfoForm'
import { deleteThisSkill } from '../actions/SkillActions'
import { Segment, Grid, Card, Image, Icon, Container, Button } from 'semantic-ui-react'

const ProfileInfo = () => {
  const dispatch = useDispatch()
  
  const currentUser = useSelector(state => state.currentUser)
  const { displayname, donated_hour, time_slot, location, bio } = currentUser

  const handleRemove = (user_skill) => {
    dispatch(deleteThisSkill(user_skill))
  }
  
  const mySkillsText = currentUser.user_skills ? currentUser.user_skills.map(user_skill => {
    return user_skill.skill.name ? (
      <div key={user_skill.id}>
        <li key={user_skill.id} style={{fontSize: "1.5em"}}>
          {user_skill.skill.name}
          <Button basic circular onClick={() =>handleRemove(user_skill)} icon='delete' size='mini'></Button>
        </li>
        {/* <Button basic onClick={() =>handleRemove(user_skill)}
        size='mini' >Remove</Button> */}
      </div>
    ) : null
  })
  : null


  return (
  <Container>
    <Segment vertical >
    <Grid verticalAlign='middle' columns='equal'>
    <Grid.Row clolumns={3}>
      <Grid.Column width={5}>
        <div >
          <Card >
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
          </Card>
        </div>
      </Grid.Column>

      <Grid.Column width={5} >
          <Segment >
        <div style={editFormStyle}>
            <Icon name='user' size='large'/>
            <h2 className="ui header purple">My skills: </h2>
            {mySkillsText}<br /><br /><br />
            <AddSkillForm />
        </div>
          </Segment>
      </Grid.Column>

      <Grid.Column width={6}>
        <Segment compact stretched >
          <EditInfoForm />
        </Segment>
      </Grid.Column>

      </Grid.Row>
    </Grid>
    </Segment>
  </Container>
  )

}

const editFormStyle={
  height: "500px"
  // overflow: "scroll"
}

export default ProfileInfo

