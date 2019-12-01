import React from 'react'
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import {logoutUser} from '../actions';

const SearchBar = () => {
  return (
    <div style={barStyle}>
      I am a searchBar!
    </div>
  )
}

const barStyle = {
  border: "2px grey solid",
  display: "flex"
}
export default SearchBar