import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addASkill } from '../actions/SkillActions';
import { Form, Button } from "semantic-ui-react";


const AddSkillForm = () => {

  const dispatch = useDispatch()
  const allSkills = useSelector(state => state.allSkills)
  const currentUser = useSelector(state => state.currentUser)

  const [skillForm, setSkillForm] = useState({
    user_id: currentUser.id,
    skill_id: null,
    name: ""
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
      <Form onSubmit={handleSubmit} size='large'>
      <h2 className="ui aligned header purple">Add a new Skill</h2>
        <select onChange={handleOnChange}>
          {allSkills.map( (skill, index) => <option key={skill.id} value={index}> {skill.name} </option>)}
        </select>

        <br/>
        <Button basic circular icon='add' size='mini'></Button>

      </Form>
    </React.Fragment>
  )

}

export default AddSkillForm