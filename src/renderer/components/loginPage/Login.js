import React from 'react'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import { Component } from 'react';
//import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
//import './renderer/assets/stylesheets/App.css'
import Image from './../../assets/images/avatar/profile-pic.png'
class Login extends React.Component {
  render() {
    return (
        <div className="page-form">
        <div className="panel panel-blue">
          <div className="panel-body pan">
            <form action="#" className="form-horizontal">
              <div className="form-body pal">
                <div className="col-md-12 text-center">
                  <h1 style={{marginTop: '-90px', fontSize: '48px'}}>
                    Money 360 Admin Login</h1>
                  <br />
                </div>
                <div className="form-group">
                  <div className="col-md-3">
                    <img src={Image} className="img-responsive" style={{marginTop: '-35px'}} />
                  </div>
                  <div className="col-md-9 text-center">
                    <h1>
                      Hold on, please.</h1>
                    <br />
                    <p>
                      Just sign in and we’ll send you on your way</p>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputName" className="col-md-3 control-label">
                    Username:</label>
                  <div className="col-md-9">
                    <div className="input-icon right">
                      <i className="fa fa-user" />
                      <input id="inputName" type="text" placeholder className="form-control" /></div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputPassword" className="col-md-3 control-label">
                    Password:</label>
                  <div className="col-md-9">
                    <div className="input-icon right">
                      <i className="fa fa-lock" />
                      <input id="inputPassword" type="text" placeholder className="form-control" /></div>
                  </div>
                </div>
                <div className="form-group mbn">
                  <div className="col-lg-12" align="right">
                    <div className="form-group mbn">
                      <div className="col-lg-3">
                        &nbsp;
                      </div>
                      <div className="col-lg-9">
                      <Link to='/customer'><a className="btn btn-default">Login</a></Link>&nbsp;&nbsp;
                        <button type="submit" className="btn btn-default">
                          Sign In</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-12 text-center">
          <p>
            Forgot Something ?
          </p>
        </div>
      </div>
    )
  }
}

export default Login