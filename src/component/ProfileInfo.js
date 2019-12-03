import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddSkillForm from './AddSkillForm'
import EditInfoForm from './EditInfoForm'
import { deleteThisSkill } from '../actions/SkillActions'


const ProfileInfo = () => {
  const dispatch = useDispatch()
  
  const currentUser = useSelector(state => state.currentUser)
  
  const { displayname, donated_hour, time_slot, location, image, bio } = currentUser

  const handleRemove = (user_skill) => {
    dispatch(deleteThisSkill(user_skill))
  }
  
  const mySkillsText =  currentUser.user_skills.map(user_skill => {
    return user_skill.skill.name ? (
      <div key={user_skill.id}>
        <li key={user_skill.id}>{user_skill.skill.name}</li>
        <button onClick={() =>handleRemove(user_skill)}>Remove</button>
      </div>
    ) : null
  })


  return (

    <React.Fragment>
    <div style={infoStyle}>
      <div>
        <h2>Name: {displayname}</h2>
        <h2>Donated hours: {donated_hour}</h2>
        <h2>Time slot: {time_slot}</h2>
        <h2>Location: {location}</h2>
        <h2>Image: <br/>
          <img src="./alpaca.jpg"/></h2>
        <h2>bio: {bio}</h2>
        <h2>My skills: </h2>
      </div>
      <div>{mySkillsText}</div>
      <AddSkillForm />
      <EditInfoForm />

    </div>
    </React.Fragment>
  )

}

const infoStyle = {
  border: "3px orange solid"
}

export default ProfileInfo