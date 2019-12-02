import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addASkill } from '../actions/SkillActions';


const AddSkillForm = () => {

  const dispatch = useDispatch()
  const allSkills = useSelector(state => state.allSkills)
  const currentUser = useSelector(state => state.currentUser)

  const [skillForm, setSkillForm] = useState({
    user_id: currentUser.id,
    skill_id: allSkills[0].id,
    name: allSkills[0].name
  })

  const handleOnChange = e => {
    setSkillForm({
        ...skillForm, 
        name: allSkills[e.target.value].name,
        skill_id: allSkills[e.target.value].id
      })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addASkill(skillForm))
  }

  return (
    <React.Fragment>
      <h3>Add a new Skill</h3>
      <form onSubmit={handleSubmit}>
        <select onChange={handleOnChange}>
          {allSkills.map( (skill, index) => <option key={skill.id} value={index}> {skill.name} </option>)}
        </select>
        <input type="submit" />
      </form>
    </React.Fragment>
  )

}

export default AddSkillForm