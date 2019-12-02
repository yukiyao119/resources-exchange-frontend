import React from 'react'

const SearchBar = (props) => {

  return (
    <React.Fragment>
    <div style={barStyle}>
      I am a searchBar!
      <br />
      <br />
      <input type="text" 
        autoComplete="off"
        onChange={props.handleSearch} 
        placeholder="Search..." />
    </div>
    </React.Fragment>
  )
}

const barStyle = {
  border: "2px grey solid",
  display: "flex"
}
export default SearchBar