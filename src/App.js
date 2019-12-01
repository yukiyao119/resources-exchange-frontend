import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Home from './container/Home'
import Nav from './component/Nav'
import Login from './component/Login'
import Signup from './component/Signup'
import Profile from './container/Profile'

import { getProfileFetch } from './actions/UserActions'
import { loadAllSkills } from './actions/SkillActions'
import { loadAllExchanges } from './actions/ExchangeActions'

 const App = () => {

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)

  useEffect(() => { 
    dispatch(getProfileFetch()) 
    dispatch(loadAllSkills())
    dispatch(loadAllExchanges())
   }, [dispatch])

  console.log("currentUser", currentUser);
  
  
  return (
    <BrowserRouter>

      <Nav />
      {/* <Switch> */}
      
      {Object.keys(currentUser).length > 0 ? 
      <>
        <Route path="/profile" component={Profile}/>
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