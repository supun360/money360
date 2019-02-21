import React from 'react'
//import Dropdown from '../higherPurchasePage/dropdown'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import './../../assets/stylesheets/main.css'
import './../../components/dropdownMenu/dropdown'
import userimg from './../../assets/images/avatar/48.jpg'
//import './../../stylesheets/jquery-ui-1.10.4.custom.min.css'
import './../../assets/stylesheets/font-awesome.min.css'
import './../../assets/stylesheets/bootstrap.min.css'
import './../../assets/stylesheets/animate.css'
import './../../assets/stylesheets/all.css'
import './../../assets/stylesheets/style-responsive.css'
import './../../assets/stylesheets/zabuto_calendar.min.css'
import './../../assets/stylesheets/pace.css'
import './../../assets/stylesheets/jquery.news-ticker.css'



 
class Topbar extends React.Component{
  


    render() {
        return (
            
          <div id="header-topbar-option-demo" className="page-header-topbar">
          <nav id="topbar" role="navigation" style={{marginBottom: 0}} data-step={3} className="navbar navbar-default navbar-static-top">
            <div className="navbar-header">
              <button type="button" data-toggle="collapse" data-target=".sidebar-collapse" className="navbar-toggle"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button>
              <Link to="/"><a id="logo" className="navbar-brand"><span className="fa fa-rocket" /><span className="logo-text">Money 360</span><span style={{display: 'none'}} className="logo-text-icon">µ</span></a></Link></div>
            <div className="topbar-main"><a id="menu-toggle" href="#" className="hidden-xs"><i className="fa fa-bars" /></a>
              <ul className="nav navbar navbar-top-links navbar-right mbn">
                <li className="dropdown"><a data-hover="dropdown" href="#" className="dropdown-toggle"><i className="fa fa-bell fa-fw" /><span className="badge badge-green">3</span></a>
                </li>
                <li className="dropdown topbar-user" ><a data-hover="dropdown" className="dropdown-toggle"><img src={userimg} alt className="img-responsive img-circle" />&nbsp;<span className="hidden-xs">Robert John</span>&nbsp;</a>
                  <ul className="dropdown-menu dropdown-user pull-right">
                    <li><a href="#"><i className="fa fa-user" />My Profile</a></li>
                    <li><a href="#"><i className="fa fa-calendar" />My Calendar</a></li>
                    <li><a href="#"><i className="fa fa-envelope" />My Inbox<span className="badge badge-danger">3</span></a></li>
                    <li><a href="#"><i className="fa fa-tasks" />My Tasks<span className="badge badge-success">7</span></a></li>
                    <li className="divider" />
                    <li><a href="#"><i className="fa fa-lock" />Lock Screen</a></li>
                    <li><a href="Login.html"><i className="fa fa-key" />Log Out</a></li>
                  </ul>
                </li>
 
              </ul>
              {/* <Dropdown className="nav navbar navbar-top-links navbar-right mbn"/> */}
            </div>
           
          </nav></div>
          );

      }
}

export default Topbar