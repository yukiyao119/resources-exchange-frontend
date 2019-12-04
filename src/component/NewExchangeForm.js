import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAnExchange } from '../actions/ExchangeActions'
import { selectASkill } from '../actions/SkillActions'

const NewExchangeForm = () => {
  const dispatch = useDispatch()

  const currentUser = useSelector(state => state.currentUser)
  const selectedUser = useSelector(state => state.selectedUser)
  const selectedSkill = useSelector(state => state.selectedSkill)
  console.log("current User", currentUser, "selected User", selectedUser, "selected Skill", selectedSkill);
  
  const myUserSkills = currentUser.user_skills
  const theOtherUserSkills = selectedUser.user_skills
  console.log("theOtherUserSkills", theOtherUserSkills);
  

  const [exchangeForm, setExchangeForm] = useState({
    exchanger_id: myUserSkills[0].id,
    exchangee_id: theOtherUserSkills[0].id,
    time: '',
    location: ''
  })
  const { time, location } = exchangeForm

  const handleMyChange = e => {
    setExchangeForm({
      ...exchangeForm,
      exchanger_id: myUserSkills[e.target.value].id
    })
  }

  const handleTheOtherChange = e => {
    setExchangeForm({
      ...exchangeForm,
      exchangee_id: theOtherUserSkills[e.target.value].id
    })
    dispatch(selectASkill(theOtherUserSkills[e.target.value]))
  }

  const handleChange = (e) => {
    setExchangeForm({...exchangeForm, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addAnExchange(exchangeForm))
    window.alert("New Exchange requested. Go to Profile to check it out!")
  }


  return (
    <React.Fragment>
    <div style={newXStyle}>New Exchange Form</div>
    <br />
    <form onSubmit={handleSubmit}>
      My Skill: 
      <select onChange={handleMyChange}>
        {myUserSkills.map( (user_skill, index) => <option key={user_skill.id} value={index}> {user_skill.skill.name} </option>)}
      </select>

      Requesting Skill: 
      <select onChange={handleTheOtherChange}>
        {theOtherUserSkills.map( (user_skill, index) => <option key={user_skill.id} value={index}> {user_skill.skill.name} </option>)}
      </select>

      Time:  
      <input type="datetime-local" name="time" value={time} onChange={handleChange} placeholder="2019-12-01 18:00:00" /><br /><br />

      Location: 
      <input type="text" name="location" value={location} onChange={handleChange} placeholder="Online/Address" /><br /><br />

      <input type="submit" />
    </form>
    <br />
    </React.Fragment>
    
  )
}

const newXStyle={
  border: "1px Orchid solid"
}


export default NewExchangeForm