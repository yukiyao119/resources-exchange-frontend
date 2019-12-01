import React from 'react'
// import { useSelector } from 'react-redux'

const NewExchangeForm = () => {
  // const currentUser = useSelector(state => state.currentUser)

  return (
    <React.Fragment>
    <div style={newXStyle}>New Exchange Form</div>
    <br />
    </React.Fragment>
    
    // <form onSubmit={handleSubmit} style={formStyle}>
    //   <h1>New Exchange Form</h1>
    //   <input
    //     type="text"
    //     name="userSkill"
    //     value={userSkill}
    //     onChange={handleChange}
    //     placeholder="userSkill"
    //   />
    //   <input
    //     type="password"
    //     name="password"
    //     value={password}
    //     onChange={handleChange}
    //     placeholder="Password"
    //   />

    //   <input
    //     type="text"
    //     name="img"
    //     value={img}
    //     onChange={handleChange}
    //     placeholder="Image Url"
    //   />

    //   <input
    //     type="text"
    //     name="bio"
    //     value={bio}
    //     onChange={handleChange}
    //     placeholder="Bio"
    //   />
    //   <input type="submit" />
    // </form>
    
  )

}

const newXStyle={
  border: "1px Orchid solid"
}


export default NewExchangeForm