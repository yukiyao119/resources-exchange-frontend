import React from 'react'
// import { useSelector } from 'react-redux'
import { Card, Icon, Grid } from 'semantic-ui-react'


const SkillCard = ({skill, handleClickSkill}) => {

  return (
    <Grid.Column width={4}>
    <Grid.Row>
      <Card
        onClick={handleClickSkill}
        image='/qianbi.png'
        header={skill.name}
        description='JavaScript, often abbreviated as JS, is a high-level, just-in-time compiled, object-oriented programming language that conforms to the ECMAScript specification.'
      />
    </Grid.Row>
  </Grid.Column>
  )
}

// const skillStyle = {
//   border: "1px pink solid"
// }

export default SkillCard
