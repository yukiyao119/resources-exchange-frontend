import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom';

import Home from './container/Home'
import Nav from './component/Nav'
import Login from './component/Login'
import Signup from './component/Signup'
import Profile from './container/Profile'
import {getProfileFetch} from './actions'

class App extends React.Component {

  // state = {
  //   page: 'login'
  // }
 
  // redirect = (page) => {
  //   this.setState({ page })
  // }

  componentDidMount(){
    this.props.getProfileFetch()
  }

  // async componentDidMount(){
  //   await this.props.getProfileFetch()
  // }

  // handleSignup = () => { this.setState({page: 'signup'})}

  // handleLogin = () => {this.setState({ page: 'login'})}

  render() {
    return (
    <BrowserRouter>

      <Nav />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login}/>
        <Route path="/profile" component={Profile}/>
        <Route exact path="/" component={Home}/>
      </Switch>

    </BrowserRouter>

    )

  }
}

// const mapStateToProps = state => ({
//   currentUser: state.currentUser
// })

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  // loginUser: userObj => ({ type: "LOGIN_USER",payload: userObj })
})

export default connect(null, mapDispatchToProps)(App);
