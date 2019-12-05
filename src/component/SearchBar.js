import React from 'react'
import { Search, Grid, Header, Segment, Container } from 'semantic-ui-react'

const SearchBar = (props) => {

  return (
    <React.Fragment>
    <Container>

      <Segment raised color='teal' size='large' textAlign='justify'>
        <div className="ui search">
          <div className="ui left icon input">
            <input type="text" 
            autoComplete="off"
            onChange={props.handleSearch} 
            placeholder="Search..." />
            <i aria-hidden="true" className="search icon"></i>
          </div>
        </div>
      </Segment>

    </Container>
    </React.Fragment>
  )
}

// const barStyle = {
//   border: "2px grey solid",
//   display: "flex"
// }

export default SearchBar