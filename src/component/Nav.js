import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../actions/UserActions'
import { Menu, Image, Label } from 'semantic-ui-react'

const Nav = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }
  
  return (
    <>
    { localStorage.token ? 
      <>
        <div >
          <Menu className="ui large secondary inverted teal">
            <Image src='/xxx.png' size='mini'/>
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
        <div className="pusher">
          <div className="ui inverted vertical masthead center aligned segment">
            <div className="ui container">
              <div className="ui large secondary inverted pointing menu">
                <div className="right item">
                  <Link to="/signup" className="ui inverted button">Signup</Link>
                  <Link to="/login" className="ui inverted button">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    }
    </>
  )
}

export default Nav;

