import React from 'react'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
// import Content from './content';
import Topbar from './../topbar/index';
import userForm from './userForm';
import $ from 'jquery';
import axios from 'axios'

class savingsAccount extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          show: true,
          hide: false
        }
    }

    saveData(e){
        e.preventDefault();
        const accno = $('#accno').val();
        const acctype = $('#acctype').val();
        const nicno = $('#nicno').val();
        const business = $('#business').val();
        const taxno = $('#taxNo').val();
        const citizenship = $('#citizenship').val();
        const perpose = $('#perpose').val();
        const income = $('#income').val();
        const funds = $('#funds').val();
        const property1 = $('#property1').val();
        const property2 = $('#property2').val();

        if(accno.length != 0 && nicno.length != 0 && business.length != 0 && taxno.length != 0 && citizenship.length != 0 && perpose.length != 0 && income.length != 0 && funds.length != 0 && property1.length != 0 && property2.length != 0){
            axios.post('http://localhost:8080/savings/create', {
            accno: accno,
            acctype: acctype,
            nicno: nicno,
            business: business,
            taxno: taxno,
            citizenship: citizenship,
            perpose: perpose,
            income: income,
            funds: funds,
            property1: property1,
            property2: property2
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
    });    
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
<div className="panel panel-grey">
                                <div className="panel-heading">
                                   Create new account</div>
                                    <div className="panel-body pan">
                                    <br/>
                                    <div className="form-body pal" >
                                        <form className="form-control">
                                            <div style = {{marginLeft:'360px'}}>Account type :&nbsp;&nbsp;
                                            <select name = "acctype" id = "acctype">
                                                <option value = "Savings account" selected>Savings account</option>
                                                <option value = "Current account">Current account</option>                                                
                                            </select>
                                            </div>
                                        </form>
                                    </div>
                                        <form action="#">
                                            <div className="form-body pal">
                                                
                                            <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    Account number
                                                                    <i className="fa fa-plus"></i>
                                                                    <input id="accno" type="text" ref="accno" placeholder="Account number" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    NIC number
                                                                    <i className="fa fa-plus"></i>
                                                                    <input id="nicno" type="text" ref="nicno" placeholder="NIC number" className="form-control" /></div>
                                                            </div>
                                                        </div>                                                        
                                                    </div>

                                                <div className="row">                                                    
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                Account Details
                                                                <i className="fa fa-plus"></i>
                                                                <input id="business" type="text" ref="natureOfBusiness" placeholder="Nature of business" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <br/>
                                                                    <i className="fa fa-plus"></i>
                                                                    <input id="taxNo" type="text" ref="tax_no" placeholder="Tax file number" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-plus"></i>
                                                                    <input id="citizenship" type="text" ref="citizenship" placeholder="Citizenship" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-plus"></i>
                                                                    <input id="perpose" type="text" ref="perpose" placeholder="Perpose of opening the account" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-plus"></i>
                                                                    <input id="income" type="text" ref="income" placeholder="Level of income per month" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-plus"></i>
                                                                    <input id="funds" type="text" ref="funds" placeholder="Source of funds" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    Property details
                                                                    <i className="fa fa-plus"></i>
                                                                    <input id="property1" type="text" ref="property1" placeholder="Immovable property details" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <br />
                                                                    <i className="fa fa-plus"></i>
                                                                    <input id="property2" type="text" ref="property2" placeholder="Movable property details" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    
                                                    
                                                <div className="form-actions text-right pal">
                                                    <button type="submit" id="btnCus" style = {{marginRight:'20px',width:'100px'}} onClick={this.saveData.bind(this)} className="btn btn-primary save">
                                                        Save</button>
                                                    <button type="submit" id="btnCus" className="btn btn-primary" style = {{width:'100px'}} onClick={()=>this.props.hideWindow()}>
                                                        Cancel</button>
                                                </div>
                                                </div>
                                                </form>
                                            </div>
                                        </div>   
       
  </div>
        )        
    }
}

export default savingsAccount