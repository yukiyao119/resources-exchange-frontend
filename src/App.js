import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router-dom'

import Home from './container/Home'
import Nav from './component/Nav'
import Login from './component/Login'
import Signup from './component/Signup'
import Profile from './container/Profile'
import Find from './container/Find'
import { getProfileFetch } from './actions/UserActions'


 const App = () => {

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)
  // const allSkills = useSelector(state => state.allSkills)
  // const loggedIn = useSelector(state => state.loggedIn)
  
  useEffect(() => dispatch(getProfileFetch())
  , [dispatch])
  
  console.log("currentUser", currentUser)
  // dispatch(loadAllSkills())
  // dispatch(loadAllExchanges())
  // dispatch(loadAllReviews())
  // dispatch(loadAllUsers())
  
  
  return (
    <>
    
      {Object.keys(currentUser).length > 0  ? 
      <>
          <Nav />
          <Route path="/profile" 
            render= { routerProps => <Profile {...routerProps}/>} />
          <Route path="/find" 
            component={Find}/>
          <Route exact path="/" 
            component={Home}/>
      </>
      :
      <>
        <Nav />
        <Route path="/signup" 
          render= { routerProps => <Signup {...routerProps}/>}/>
        <Route path="/login" 
          render= { routerProps => <Login {...routerProps}/>}/>
        <Redirect to='/login'/>
      </>
    }
  </>
  )

}



export default withRouter(App)