import React from 'react'
// import { useSelector } from 'react-redux'
import { Card, Grid, Image } from 'semantic-ui-react'


const SkillCard = ({skill, handleClickSkill}) => {

  return (
    // <Grid.Column width={4}>
    <Grid.Row style={{ 'margin': '10px'}}>
      <Card fluid onClick={handleClickSkill}>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='/qianbi.png'
          />
          <Card.Header>{skill.name}</Card.Header>
          <Card.Meta>Find available skill owners!</Card.Meta>
        </Card.Content>
      </Card>
    </Grid.Row>
  // </Grid.Column>
  )
}

// const skillStyle = {
//   border: "1px pink solid"
// }

export default SkillCard
