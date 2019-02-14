import React from 'react'
//import Topbar from './../topbar'
//import Sidebar from './../sidebar'
import UserForm from './../higherPurchasePage/userForm'
class content extends React.Component {
    render() {
      return (
        <div>
          <div id="page-wrapper">
    {/*BEGIN TITLE & BREADCRUMB PAGE*/}
    <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
      <div className="page-header pull-left">
        <div className="page-title">
          Higher Purchase</div>
      </div>
      <ol className="breadcrumb page-breadcrumb pull-right">
        <li><i className="fa fa-home" />&nbsp;<a href="dashboard.html">Home</a>&nbsp;&nbsp;<i className="fa fa-angle-right" />&nbsp;&nbsp;</li>
        <li className="hidden"><a href="#">Higher Purchase</a>&nbsp;&nbsp;<i className="fa fa-angle-right" />&nbsp;&nbsp;</li>
        <li className="active">Higher Purchase</li>
      </ol>
      <div className="clearfix">
      </div>
    </div>
    {/*END TITLE & BREADCRUMB PAGE*/}
    {/*BEGIN CONTENT*/}
    <div className="page-content">
      <UserForm/>
    </div>
    {/*END CONTENT*/}
    {/*END FOOTER*/}
  </div>
        </div>
      )
    }
  }
  
  export default content