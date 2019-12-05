import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editProfileInfo } from '../actions/UserActions'
import { Form } from "semantic-ui-react";

const EditInfoForm = () => {

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)

  const [infoForm, setInfoForm] = useState({
    displayname: '',
    img: '',
    bio: '',
    location: '',
    time_slot: ''
  })

  const handleChange = (e) => {
    setInfoForm({...infoForm, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("submitting form!")
    dispatch(editProfileInfo(infoForm, currentUser.id))
  }

  const { displayname, img, bio, location, time_slot } = infoForm

  return (

    <div style={editFormStyle}>
      <h2 className="ui center aligned header purple">Edit Your Info here!</h2>
      <Form  onSubmit={handleSubmit}>
        Display Name: <br/>
        <input type="text" name="displayname" value={displayname} onChange={handleChange} placeholder="Display Name" /><br /><br />

        Image: <input type="text" name="img" value={img} onChange={handleChange} placeholder="Image URL" /><br /><br />
        
        Bio: <textarea type="text" name="bio" value={bio} onChange={handleChange} placeholder="Bio" /><br /><br />
        
        Location: <input type="text" name="location" value={location} onChange={handleChange} placeholder="Online/Neighborhood" /><br /><br />
        
        Time slot:  <input type="text" name="time_slot" value={time_slot} onChange={handleChange} placeholder="Weekend/Weekday after work" /><br /><br />
        
        <input type="submit" />
      </Form>
    </div>

  )
}

const editFormStyle={
  height: "500px",
  overflow: "scroll"
}
const infoStyle = {
  border: "1px cyan solid"
}


export default EditInfoForm