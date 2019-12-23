import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SkillCard from '../component/SkillCard'
import { selectASkill } from '../actions/SkillActions'
import UserList from '../container/UserList'
import SearchBar from '../component/SearchBar'
import { Container, Grid, Header } from 'semantic-ui-react'

const Skillboard = () => {

  const dispatch = useDispatch()
  const allSkills = useSelector(state => state.allSkills)
  // const selectedSkill = useSelector(state => state.selectedSkill)
  console.log("allSkills", allSkills);
  
  const [searchQuery, setSearchQuery] = useState({
    query: ''
  })

  const handleSearch = e => {
    setSearchQuery({
      ...searchQuery,
      query: e.target.value
    })
  }

  const searchedSkills = allSkills.filter(skill => skill.name.toLowerCase().includes(searchQuery.query) )

  const handleClickSkill = (skillObj) => {
    dispatch(selectASkill(skillObj))
  }

  const skillItems = 
  searchedSkills.length===0 ? allSkills : 
  searchedSkills.map(skill => (
        <SkillCard key={skill.id} 
        skill={skill} 
        handleClickSkill={() => handleClickSkill(skill) }
        />
  ))

  console.log("skillItems", skillItems);
  

  return (
    <React.Fragment>
      <SearchBar handleSearch={handleSearch}/>
      <Container>
        <br/>
        <Grid>
        <Grid.Row columns={2}>

          <Grid.Column width={9}>
            <Header as="h1">Skill Board</Header>
            {skillItems}
          </Grid.Column>

          <Grid.Column width={6}>
            <Header as="h1">Skill Owners</Header>
            <UserList />
            {/* {Object.keys(selectedSkill).length>0 ? <UserList /> : null} */}
          </Grid.Column>

        </Grid.Row>
        </Grid>
        <br />
      </Container>
    </React.Fragment>
  )
}

// const boardStyle = {
//   border: "3px blue solid"
// }

export default Skillboard