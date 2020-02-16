import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../actions/UserActions'
import { Menu, Image, Label } from 'semantic-ui-react'

const Nav = (mobile) => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  const headerH1 = {
    fontSize: mobile ? '2em' : '4em',
    fontWeight: 'normal',
    marginBottom: 0,
    marginTop: mobile ? '1.5em' : '3em',
  }
  
  const headerH2 = {
    fontSize: mobile ? '1.5em' : '1.7em',
    fontWeight: 'normal',
    marginTop: mobile ? '0.5em' : '1.5em',
  }
  
  return (
    <div >
    { localStorage.token ? 
      <>
        <div >
          <Menu className="ui large secondary inverted teal">
            <Image src='/xxx.png' size='mini'style={{"margin":"5px", "marginLeft": "20px"}}/>
            <Link to="/" className="toc item"></Link>
            <Link to="/" className="item">Home</Link>
            <Link to="/find" className="item">Find<Label basic color='teal' pointing='left' size='small'>Beta</Label></Link>
            <Link to="/profile" className="item">Profile</Link>
            <Link to="/" onClick={handleLogout} className="right item">Logout</Link>
          </Menu>
        </div>
      </>
    :
      <>
        {/* <div className="pusher"> */}
          <div className="ui inverted vertical masthead center aligned segment">
            <div className="ui container">
              <div className="ui large secondary inverted pointing menu">
                <div className="right item">
                  {/* <Image src='/xxx.png' size='mini'style={{"margin":"5px", "marginLeft": "20px"}}/>  */}
                  <Link to="/signup" className="ui inverted button">Signup</Link>
                  <Link to="/login" className="ui inverted button">Login</Link>
                </div>
              </div>
            </div>
          </div>
          
        {/* </div> */}
      </>
    }
    </div>
  )
}

// const homeStyle = {
//   // display: "inline-block",
//   position: "absolute",
//   width: "100%",
//   height: "600px",
//   backgroundImage: `url(${"/artem-beliaikin-v6kii3H5CcU-unsplash.jpg"})`,
//   backgroundSize: 'cover',
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   zIndex: "-1"
// }

export default Nav;

