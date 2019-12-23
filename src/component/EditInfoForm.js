import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editProfileInfo } from '../actions/UserActions'
import { Form, Button } from "semantic-ui-react";

const EditInfoForm = () => {

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)

  const [infoForm, setInfoForm] = useState({
    displayname: currentUser.displayname,
    img: currentUser.img,
    bio: currentUser.bio,
    location: currentUser.location,
    time_slot: currentUser.time_slot
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
    <div >
      <h2 className="ui center aligned header purple">Edit Your Info here!</h2>
      <Form  onSubmit={handleSubmit}>
        Display Name: <br/>
        <input type="text" name="displayname" value={displayname} onChange={handleChange} placeholder="Display Name" /><br /><br />

        Image: <input type="text" name="img" value={img} onChange={handleChange} placeholder="Image URL" /><br /><br />
        
        Bio: <textarea type="text" name="bio" value={bio} onChange={handleChange} placeholder="Bio" /><br /><br />
        
        Location: <input type="text" name="location" value={location} onChange={handleChange} placeholder="Online/Neighborhood" /><br /><br />
        
        Time slot:  <input type="text" name="time_slot" value={time_slot} onChange={handleChange} placeholder="Weekend/Weekday after work" /><br /><br />
        
        <Button type='submit'>Submit</Button>
      </Form>
    </div>

  )
}

// const editFormStyle={
//   height: "800px"
  // ,
  // overflow: "scroll"
// }


export default EditInfoForm