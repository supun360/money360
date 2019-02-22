import React from 'react'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
//import Content from './content';
import Topbar from './../topbar/index';
import Content from './Body';
import Customer from './Customer';
//import './../../stylesheets/bootstrapreact/new.css'

class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: true,
      hide: false
    }
  }

  hideCom(){
    this.setState({
      show: false,
      hide: true
    })
  }


    render() {
        return <div>
        <Topbar/>
<div id="wrapper">
  {/*BEGIN SIDEBAR MENU*/}
  <nav id="sidebar" role="navigation" data-step={2} data-intro="Template has <b>many navigation styles</b>" data-position="right" className="navbar-default navbar-static-side">
    <div className="sidebar-collapse menu-scroll bg-grey">
      <ul id="side-menu" className="nav">
        <div className="clearfix" />
        <li className="active"><Link to="/customer"><i className="fa fa-user fa-fw">
              <div className="icon-bg bg-orange" />
            </i><span className="menu-title">Customer</span></Link></li>
        <li><Link to="/fixed-deposits"><i className="fa fa-desktop fa-fw">
              <div className="icon-bg bg-orange" />
            </i><span className="menu-title">Fixed Deposits</span></Link>
        </li>
        <li><Link to="/gold-loans"><i className="fa fa-send-o fa-fw">
              <div className="icon-bg bg-green" />
            </i><span className="menu-title">Gold Loans</span></Link>
        </li>
        <li><Link to="/higherPurchase"><i className="fa fa-edit fa-fw">
              <div className="icon-bg bg-violet" />
            </i><span className="menu-title">Higher Purchase</span></Link> 
        </li>
        <li><Link to="/leasing"><i className="fa fa-th-list fa-fw">
              <div className="icon-bg bg-blue" />
            </i><span className="menu-title">Leasing</span></Link>
        </li>
        <li><Link to="/micro-finance"><i className="fa fa-database fa-fw">
              <div className="icon-bg bg-red" />
            </i><span className="menu-title">Micro Finance</span></Link>
        </li>
        <li><Link to="/mortgage-loans"><i className="fa fa-file-o fa-fw">
              <div className="icon-bg bg-yellow" />
            </i><span className="menu-title">Mortgage Loans</span></Link>
        </li>
        <li><Link to="/personal-loans"><i className="fa fa-gift fa-fw">
              <div className="icon-bg bg-grey" />
            </i><span className="menu-title">Personal Loans</span></Link>
        </li>
        <li><Link to="/power-draft"><i className="fa fa-sitemap fa-fw">
              <div className="icon-bg bg-dark" />
            </i><span className="menu-title">Power Draft</span></Link>
        </li>
        <li><Link to="/savings-accounts"><i className="fa fa-envelope-o">
              <div className="icon-bg bg-primary" />
            </i><span className="menu-title">Savings Accounts</span></Link>
        </li>
      </ul>
    </div>
  </nav>
  {/*END SIDEBAR MENU*/}
  {/*BEGIN CHAT FORM*/}
  {
                this.state.show?
                <Content hideCom={this.hideCom.bind(this)}/>
                :null
              }
              {
                this.state.hide?
                <Customer/>
                :null
              }     
  {/*END PAGE WRAPPER*/}
</div>


        </div>
      }
}

export default Sidebar