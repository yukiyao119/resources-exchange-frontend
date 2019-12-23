import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addASkill } from '../actions/SkillActions';
import { Form, Button, Header } from "semantic-ui-react";


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
    <>
    <Header as='h3' color='purple'>Add a new Skill</Header>
    <Form onSubmit={handleSubmit} size='small'>
      <Form.Field inline>
        <select onChange={handleOnChange}>
          {allSkills.map( (skill, index) => <option key={skill.id} value={index}> {skill.name} </option>)}
        </select> 
        <Button circular basic size='mini' icon="add" onSubmit={handleSubmit}></Button>
      </Form.Field>
    </Form>
    </>
  )

}

export default AddSkillForm