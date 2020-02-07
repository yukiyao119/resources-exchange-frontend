import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddSkillForm from './AddSkillForm'
import EditInfoForm from './EditInfoForm'
import { deleteThisSkill } from '../actions/SkillActions'
import { Image, Icon, Button, Divider, Header, List, Modal } from 'semantic-ui-react'

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
        <li key={user_skill.id} >
          {user_skill.skill.name} 
          <Icon onClick={() =>handleRemove(user_skill)} name="remove" ></Icon>
        </li>
      </div>
    ) : null
  })
  : null

  return (
    <>
    <div style={ {"marginTop": "10px", "display": "flex"} }>
      <div style={ {"margin": "25px", "width": "15%"} }>
        <Image src='/alpaca.jpg' size='large' circular verticalAlign='top' />{' '}
      </div>
      <div style={ {"margin": "25px", "width": "25%", "textAlign": "left"} }>
        <Header as='h3' color='purple'>Name: {displayname}</Header>
          <span>Donated hours: {donated_hour} </span>
          <List>
            <List.Item><strong>Bio: </strong>{bio}</List.Item>
            <List.Item><strong>Location: </strong>{location}</List.Item>
            <List.Item><strong>Time slot: </strong>{time_slot}</List.Item>
          </List>

          <Modal trigger={<Button>Edit</Button>} closeIcon>
            <Modal.Header>Profile Picture</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src='/alpaca.jpg' />
              <EditInfoForm />
            </Modal.Content>
          </Modal>
      </div>

      <div style={ {"margin": "25px", "width": "20%", "textAlign": "left"} }>
        <Header as='h3' color='purple' >My Skills</Header>
          <span>{mySkillsText}</span>
      </div>

      <div style={ {"margin": "25px", "width": "20%"} }>
        <AddSkillForm />
      </div>

    </div>

      <Divider />

    </>
  )

}


export default ProfileInfo

