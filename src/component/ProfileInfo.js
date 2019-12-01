import React from 'react'
import { useSelector } from 'react-redux'
import AddSkillForm from './AddSkillForm'
import EditInfoForm from './EditInfoForm'


const ProfileInfo = () => {

  const currentUser = useSelector(state => state.currentUser)

  const text = 
  // currentUser.user_skills ? 
    currentUser.user_skills.map(user_skill => {
      return user_skill.skill.name ? (<li key={user_skill.id}>{user_skill.skill.name}</li>) : null
    })

  const { displayname, donated_hour, time_slot, location, image, bio } = currentUser

  return (

    <React.Fragment>
    <div style={infoStyle}>
      <div>
        <h2>Name: {displayname}</h2>
        <h2>Donated hours: {donated_hour}</h2>
        <h2>Time slot: {time_slot}</h2>
        <h2>Location: {location}</h2>
        <h2>Image: {image}</h2>
        <h2>bio: {bio}</h2>
        <h2>My skills: </h2>
      </div>
      <div>{text}</div>
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