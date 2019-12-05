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
        description='Lorem ipsum dolor sit amet, mundi corrumpit qui ea, quidam complectitur nec at. Eu vis alia invenire instructior.'
      />
    </Grid.Row>
  </Grid.Column>
  )
}

// const skillStyle = {
//   border: "1px pink solid"
// }

export default SkillCard
