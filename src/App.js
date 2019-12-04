import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Home from './container/Home'
import Nav from './component/Nav'
import Login from './component/Login'
import Signup from './component/Signup'
import Profile from './container/Profile'
import Find from './container/Find'

import { getProfileFetch } from './actions/UserActions'
import { loadAllSkills } from './actions/SkillActions'
import { loadAllExchanges } from './actions/ExchangeActions'
import { loadAllReviews } from './actions/ReviewActions'
import { loadAllUsers } from './actions/UserActions'

 const App = () => {

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)
  const allSkills = useSelector(state => state.allSkills)
  const loggedIn = useSelector(state => state.loggedIn)
  
  useEffect(() => { 
    dispatch(getProfileFetch()) 
    dispatch(loadAllSkills())
    dispatch(loadAllExchanges())
    dispatch(loadAllReviews())
    dispatch(loadAllUsers())
   }, [loggedIn, dispatch])

  console.log("currentUser", currentUser, "allSkills", allSkills);
  
  
  return (
    <BrowserRouter>

      <Nav />
      {/* <Switch> */}
      
      {Object.keys(currentUser).length > 0 ? 
      <>
        <Route path="/profile" component={Profile}/>
        <Route path="/find" component={Find}/>
        <Route exact path="/" component={Home}/>
      </>
      : 
      <>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login}/>
      </>
      }
      {/* </Switch> */}

    </BrowserRouter>
  )
}

export default App