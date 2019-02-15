import React from 'react'
import { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './renderer/components/loginPage/SignUpForm';
import SignInForm from './renderer/components/loginPage/SignInForm';
import './renderer/assets/stylesheets/App.css'
//import Topbar from './renderer/components/topbar/index'
import Index from './renderer/components/indexPage/index'
//import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <div>
        <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>

        </div>
      </Router>   
      </div>
    )
  }
}

export default App