import React from 'react'
//import Topbar from './../topbar'
//import Sidebar from './../sidebar'
import $ from 'jquery'
import axios from 'axios'
import UserForm from './userForm'
import Savings from './savingsAccount'
class content extends React.Component {

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

      hideWindow(){
        this.setState({
          show: true,
          hide: false
        })
      }

    render() {
      return (
        <div>
          <div id="page-wrapper">
    {/*BEGIN TITLE & BREADCRUMB PAGE*/}
    <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
      <div className="page-header pull-left">
        <div className="page-title">
          Accounts</div>
      </div>
      <ol className="breadcrumb page-breadcrumb pull-right">
        <li><i className="fa fa-home" />&nbsp;<a href="/customer">Home</a>&nbsp;&nbsp;<i className="fa fa-angle-right" />&nbsp;&nbsp;</li>
        <li className="hidden"><a href="#">Accounts</a>&nbsp;&nbsp;<i className="fa fa-angle-right" />&nbsp;&nbsp;</li>        
        <li className="active">Accounts</li>
      </ol>
      <div className="clearfix">
      </div>
    </div>
    {/*END TITLE & BREADCRUMB PAGE*/}
    {/*BEGIN CONTENT*/}
    <div className="page-content">
    
      {
        this.state.show?
        <UserForm hideCom={this.hideCom.bind(this)}/>
        :null
      }
      {
        this.state.hide?
        <Savings hideWindow={this.hideWindow.bind(this)}/>
        :null
      }

    </div>
    {/*END CONTENT*/}
    {/*END FOOTER*/}
  </div>
        </div>
      )
    }
  }
  
  export default content