import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import SkillCard from '../component/SkillCard'
import { selectASkill } from '../actions/SkillActions'
import UserList from '../container/UserList'

const Skillboard = () => {

  const dispatch = useDispatch()
  const allSkills = useSelector(state => state.allSkills)
  const selectedSkill = useSelector(state => state.selectedSkill)
  console.log("selectedSkill", selectedSkill);
  

  const handleClickSkill = (skillObj) => {
    dispatch(selectASkill(skillObj))
  }

  const skillItems = 
  // allSkills.empty ? (<h4>No Skills yet</h4>) : 
  allSkills.map(skill => (
  <SkillCard key={skill.id} 
  skill={skill} 
  handleClickSkill={() => handleClickSkill(skill) }
  />))


  return (
    <React.Fragment>
      <div style={boardStyle}>
        <h1>Skill Board </h1>
        <br />
        {skillItems}
      </div>
      <div>
        {Object.keys(selectedSkill).length>0 ? <UserList /> : null}
        <br />
      </div>
    </React.Fragment>
  )
}

const boardStyle = {
  border: "3px blue solid"
}

export default Skillboard