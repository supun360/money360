import React from 'react'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
//import UserForm from './userForm';
import Customertab from './Customer'
import Topbar from './topbar'
class Sidebar extends React.Component{
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
  <div id="page-wrapper">
    {/*BEGIN TITLE & BREADCRUMB PAGE*/}
    <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
      <div className="page-header pull-left">
        <div className="page-title">
          Customer</div>
      </div>
      <ol className="breadcrumb page-breadcrumb pull-right">
        <li><i className="fa fa-home" />&nbsp;<a href="dashboard.html">Home</a>&nbsp;&nbsp;<i className="fa fa-angle-right" />&nbsp;&nbsp;</li>
        <li className="hidden"><a href="#">Customer</a>&nbsp;&nbsp;<i className="fa fa-angle-right" />&nbsp;&nbsp;</li>
        <li className="active">Customer</li>
      </ol>
      <div className="clearfix">
      </div>
    </div>
    {/*END TITLE & BREADCRUMB PAGE*/}
    {/*BEGIN CONTENT*/}
    <div>
      <Customertab/>
    </div>
    {/*END CONTENT*/}
    {/*END FOOTER*/}
  </div>
  {/*END PAGE WRAPPER*/}
</div>


        </div>
      }
}

export default Sidebar