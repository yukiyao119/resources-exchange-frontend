import React from 'react'
// import { useSelector } from 'react-redux'


const SkillCard = ({skill, handleClickSkill}) => {

  return (
    <>
    <div style={skillStyle}>
      <h4 onClick={handleClickSkill}>{skill.name}</h4>
    </div>
    <br />
    </>
  )
}

const skillStyle = {
  border: "1px pink solid"
}

export default SkillCard
