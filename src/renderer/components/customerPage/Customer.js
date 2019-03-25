import React, { Component } from 'react';
import $ from 'jquery'
import axios from 'axios'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { relative } from 'path';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import uuidv1 from 'uuid/v1'
//import boostrap from '../script/bootstrap.min.js'

class Customer extends Component {

    constructor(prop){
        super(prop);
        this.state = {
            customer: [],
            date:'',
            dateOB: ''
          }
          this.handleChange1 = this.handleChange1.bind(this);
          this.handleChange2 = this.handleChange2.bind(this);
    }

    handleChange1(date1){
        this.setState({
            date: date1
        })
    }

    handleChange2(date2){
        this.setState({
            dateOB: date2
        })
    }

    updateData(e){
        e.preventDefault();
        const title = $('#Title').val();
        const nameCredebtials = $('#NameCredentials').val();
        const fullName = $('#FullName').val();
        const addressNo = $('#AddressNo').val();
        const addressStreet = $('#AddressStreet').val();
        const city = $('#City').val();
        const district = $('#District').val();
        const country = $('#Country').val();
        const identyNo = $('#IdentyNo').val();
        const dateOfIssue = this.state.date;
        const dateOfBirth = this.state.dateOB;
        const gender = $('#Gender').val();
        const occupation = $('#Occupation').val();
        if(title.length != 0 && nameCredebtials.length != 0 && 
            fullName.length != 0 && addressNo.length != 0 && 
            addressStreet.length != 0 && city.length != 0 && 
            country.length != 0 && gender.length != 0 && occupation.length != 0){
            axios.post('http://localhost:8080/update', {
                
                title: title,
                nameCredentials: nameCredebtials,
                fullName: fullName,
                addressNo: addressNo,
                addressStreet: addressStreet,
                city: city,
                district: district,
                country: country,
                identyNo: identyNo,
                dateOfIssue: dateOfIssue,
                dateOfBirth: dateOfBirth,
                gender: gender,
                occupation:occupation
              })
              .then(function (response) {
                  if(response.data.msg === true){
                    setTimeout(function() {
                            $('#smsg').html("<strong>Sucessfull!</strong> Data update sucessfull.");
                            $('#Smsg').css('display','block');
                        }.bind(this),
                        10);
                        setTimeout(function() {
                            $('#smsg').html("<strong>Sucessfull!</strong> Data update sucessfull.");
                            $('#Smsg').css('display','none');
                        }.bind(this),
                        4000);
                        this.setState ({
                            customer: []
                          })
                  }else{          
                        setTimeout(function() {
                            $('#fmsg').html("<strong>Fail!</strong> Data update fail.");
                            $('#Dmsg').css('display','block');
                        }.bind(this),
                        10);
                        setTimeout(function() {
                            $('#fmsg').html("<strong>Fail!</strong> Data update fail.");
                            $('#Dmsg').css('display','none');
                        }.bind(this),
                        4000);
                  }
              })
              .catch(function (error) {
                console.log(error);
              });
            }else{
                setTimeout(function() {
                    $('#fmsg').html("<strong>Fail!</strong> Some fields are empty.");
                    $('#Dmsg').css('display','block');
                }.bind(this),
                10);
                setTimeout(function() {
                    $('#fmsg').html("<strong>Fail!</strong> Some fields are empty.");
                    $('#Dmsg').css('display','none');
                }.bind(this),
                4000);
            }
    }

    saveData(e){
        e.preventDefault();
        const title = $('#Title').val();
        const nameCredebtials = $('#NameCredentials').val();
        const fullName = $('#FullName').val();
        const addressNo = $('#AddressNo').val();
        const addressStreet = $('#AddressStreet').val();
        const city = $('#City').val();
        const district = $('#District').val();
        const country = $('#Country').val();
        const identyNo = $('#IdentyNo').val();
        const dateOfIssue = this.state.date;
        const dateOfBirth = this.state.dateOB;
        const gender = $('#Gender').val();
        const occupation = $('#Occupation').val();
        const customer_id = uuidv1();

        console.log('title', title, 'nameCredebtials', nameCredebtials, 'fullName'
        ,fullName, 'addressNo',addressNo,'addressStreet',addressStreet, 'city',city,
        'district',district,'country',country,'identyNo0',identyNo,'dateOfIssue'
        ,dateOfIssue,'dateOfBirth',dateOfBirth,'gender',gender,'occupation',
        occupation )

        if(title.length != 0 && nameCredebtials.length != 0 && 
            fullName.length != 0 && addressNo.length != 0 && 
            addressStreet.length != 0 && city.length != 0 && 
            country.length != 0 && gender.length != 0 && occupation.length != 0){
        axios.post('http://localhost:8080/add', {
            uid: customer_id,
            title: title,
            nameCredentials: nameCredebtials,
            fullName: fullName,
            addressNo: addressNo,
            addressStreet: addressStreet,
            city: city,
            district: district,
            country: country,
            identyNo: identyNo,
            dateOfIssue: dateOfIssue,
            dateOfBirth: dateOfBirth,
            gender: gender,
            occupation:occupation
          })
          .then(function (response) {
              if(response.data.msg === true){
                setTimeout(function() {
                        $('#smsg').html("<strong>Sucessfull!</strong> Data insert sucessfull.");
                        $('#Smsg').css('display','block');
                    }.bind(this),
                    10);
                    setTimeout(function() {
                        $('#smsg').html("<strong>Sucessfull!</strong> Data insert sucessfull.");
                        $('#Smsg').css('display','none');
                    }.bind(this),
                    4000);
              }else{
                  if(response.data.data.length === 204){
                    setTimeout(function() {
                        $('#fmsg').html("<strong>Fail!</strong> This customer already exist.");
                        $('#Dmsg').css('display','block');
                    }.bind(this),
                    10);
                    setTimeout(function() {
                        $('#fmsg').html("<strong>Fail!</strong> This customer already exist.");
                        $('#Dmsg').css('display','none');
                    }.bind(this),
                    4000);
                  }else{
                    setTimeout(function() {
                        $('#fmsg').html("<strong>Fail!</strong> Data insert fail.");
                        $('#Dmsg').css('display','block');
                    }.bind(this),
                    10);
                    setTimeout(function() {
                        $('#fmsg').html("<strong>Fail!</strong> Data insert fail.");
                        $('#Dmsg').css('display','none');
                    }.bind(this),
                    4000);
                  }
              }
          })
          .catch(function (error) {
            console.log(error);
          });
        }else{
            setTimeout(function() {
                $('#fmsg').html("<strong>Fail!</strong> Some fields are empty.");
                $('#Dmsg').css('display','block');
            }.bind(this),
            10);
            setTimeout(function() {
                $('#fmsg').html("<strong>Fail!</strong> Some fields are empty.");
                $('#Dmsg').css('display','none');
            }.bind(this),
            4000);
        }
  
    }

    deleteData(e){
        e.preventDefault();
        const nic = $('#deinputNic').val();

        axios.post('http://localhost:8080/delete', {
            nic: nic
          })
          .then((response) => {
                if(response.data.status === true){
                    setTimeout(function() {
                        $('#smsg').html("<strong>Sucessfull!</strong> Data deleted sucessfull.");
                        $('#Smsg').css('display','block');
                    }.bind(this),
                    10);
                    setTimeout(function() {
                        $('#smsg').html("<strong>Sucessfull!</strong> Data deleted sucessfull.");
                        $('#Smsg').css('display','none');
                    }.bind(this),
                    4000);
                }else{
                    setTimeout(function() {
                        $('#fmsg').html("<strong>Fail!</strong> Data deleted fail.");
                        $('#Dmsg').css('display','block');
                    }.bind(this),
                    10);
                    setTimeout(function() {
                        $('#fmsg').html("<strong>Fail!</strong> Data is not found.");
                        $('#Dmsg').css('display','none');
                    }.bind(this),
                    4000);
                }
            
              
          })
          .catch(function (error) {
            console.log(error);
          });
        }

    searchData(e){
        e.preventDefault();
        const nic = $('#upinputNic').val();
        if(nic.length >= 10){
            axios.post('http://localhost:8080/search', {
            nic: nic
          })
          .then((response) => {
                if(response.data.data.length === 1){
                    this.setState({ customer: response.data.data});
                    setTimeout(function() {
                        $('#smsg').html("<strong>Sucessfull!</strong> Data is found.");
                        $('#Smsg').css('display','block');
                    }.bind(this),
                    10);
                    setTimeout(function() {
                        $('#smsg').html("<strong>Sucessfull!</strong> Data is found.");
                        $('#Smsg').css('display','none');
                    }.bind(this),
                    4000);
                }else{
                    setTimeout(function() {
                        $('#fmsg').html("<strong>Fail!</strong> Data is not found.");
                        $('#Dmsg').css('display','block');
                    }.bind(this),
                    10);
                    setTimeout(function() {
                        $('#fmsg').html("<strong>Fail!</strong> Data is not found.");
                        $('#Dmsg').css('display','none');
                    }.bind(this),
                    4000);
                }
            
              
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    }

    searchDataForDelete(e){
        e.preventDefault();
        const nic = $('#deinputNic').val();
        if(nic.length >= 10){
            axios.post('http://localhost:8080/search', {
            nic: nic
          })
          .then((response) => {
                if(response.data.data.length === 1){
                    this.setState({ customer: response.data.data});
                    setTimeout(function() {
                        $('#smsg').html("<strong>Sucessfull!</strong> Data is found.");
                        $('#Smsg').css('display','block');
                    }.bind(this),
                    10);
                    setTimeout(function() {
                        $('#smsg').html("<strong>Sucessfull!</strong> Data is found.");
                        $('#Smsg').css('display','none');
                    }.bind(this),
                    4000);
                }else{
                    setTimeout(function() {
                        $('#fmsg').html("<strong>Fail!</strong> Data is not found.");
                        $('#Dmsg').css('display','block');
                    }.bind(this),
                    10);
                    setTimeout(function() {
                        $('#fmsg').html("<strong>Fail!</strong> Data is not found.");
                        $('#Dmsg').css('display','none');
                    }.bind(this),
                    4000);
                }
            
              
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    }

    

    render() {
        var cusFName = this.state.customer.map(function(item){
            return item.cusFName;
          });
          var cusLName = this.state.customer.map(function(item){
            return item.cusLName;
          });
          var cusAddress = this.state.customer.map(function(item){
            return item.cusAddress;
          });
          var cusTel = this.state.customer.map(function(item){
            return item.cusTel;
          });
          var cusCountry = this.state.customer.map(function(item){
            return item.cusCountry;
          });
          var cusCity = this.state.customer.map(function(item){
            return item.cusCity;
          });
          var cusPostalCode = this.state.customer.map(function(item){
            return item.cusPostalCode;
          });
          var cusEmail = this.state.customer.map(function(item){
            return item.cusEmail;
          });
          
        return (
            <div className='Customer'>
                <div id="page-wrapper">
                <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
            <div className="page-header pull-left">
                <div className="page-title">
                    Customer</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
                <li><i className="fa fa-home"></i>&nbsp;<a href="dashboard.html">Home</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                <li className="hidden"><a href="#">Customer</a>&nbsp;&nbsp;<i className="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                <li className="active">Customer</li>
            </ol>
            <div className="clearfix">
            </div>
        </div>
                    <div className="row col-md-3" id="Smsg" style={{position: "absolute", zIndex: 999, left: 'calc(100% - 24%)', display: 'none'}} >
                        <div data-toggle="dropdown" id="smsg" data-value="bounceInRight" className="alert alert-success"></div>
                    </div>
                    <div className="row col-md-3" id="Dmsg" style={{position: "absolute", zIndex: 999, left: 'calc(100% - 24%)', display: 'none'}}>
                        <div data-toggle="dropdown" id="fmsg" data-value="bounceInRight" className="alert alert-danger"></div>
                    </div>
                <Tabs>
                <div className="page-content" style={{width: '100%', marginleft: 'calc(100% - 90%)'}}>
                    <div className="col-md-12">
                <ul className="nav nav-tabs">
                <TabList>
                    <Tab>Add</Tab>
                    <Tab>Edit</Tab>
                    <Tab>Delete</Tab>
                </TabList>
                </ul>
                <TabPanel>
                            <div className="panel panel-grey">
                                <div className="panel-heading">
                                    Customer register form</div>
                                    <div className="panel-body pan">
                                        
                                        <form action="#">
                                            <div className="form-body pal">
                                                <div className="row">
                                                <div className="col-md-4">
                                                            <div className="form-group">
                                                                <select className="form-control" placeholder="Title" id='Title'>
                                                                    <option value="Mr">Mr</option>
                                                                    <option value="Mrs">Mrs</option>
                                                                    <option value="Prof">Prof</option>
                                                                    <option value="Rev">Rev</option>
                                                                    <option value="Miss">Miss</option>
                                                                    <option value="Messrs">Messrs</option>
                                                                    <option value="Master">Master</option>
                                                                </select></div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                <i className="fa fa-user"></i>
                                                                <input id="NameCredentials" type="text" placeholder="Name With Credentials" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-user"></i>
                                                                    <input id="FullName" type="text" placeholder="Full Name" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        {/* <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-address-card"></i>
                                                                    <input id="inputNic" type="text" placeholder="NIC/Passport No" className="form-control" /></div>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <div className='input-icon'>
                                                                    <i className='fa fa-user'></i>
                                                                    <input id="AddressNo" type="text" placeholder="Address(Home No/ Street)" className='form-control'/></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="form-group">
                                                                <div className='input-icon'>
                                                                    <i className='fa fa-user'></i>
                                                                    <input id="AddressStreet" type="text" placeholder="Address" className='form-control'/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                            <select className="form-control" id='City'>
                                                                    <option value="City">City</option>
                                                                </select></div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                            <select className="form-control" id='District'>
                                                                    <option value="District">District</option>
                                                                </select></div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <select className="form-control" id='Country'>
                                                                    <option calue="Country">Country</option>
                                                                </select></div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                <i className="fa fa-user"></i>
                                                                <input id="IdentyNo" type="text" placeholder="Identiy Card Number" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                <i className="fa fa-user"></i>
                                                                <DatePicker 
                                                                    selected={this.state.date} 
                                                                    onChange={this.handleChange1} 
                                                                    placeholderText = "ID Date of Issue"
                                                                    className="form-control"/></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                <i className="fa fa-user"></i>
                                                                <DatePicker 
                                                                    selected={this.state.dateOB} 
                                                                    onChange={this.handleChange2} 
                                                                    placeholderText = "Date of Birth"
                                                                    className="form-control"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                    <div className="col-md-4">
                                                            <div className="form-group">
                                                                <select className="form-control" placeholder="Title" id='Gender'>
                                                                    <option>Select Gender</option>
                                                                    <option>Male</option>
                                                                    <option>Female</option>
                                                                </select></div>
                                                    </div>
                                                    <div className="col-md-6">
                                                    <div className="form-group">
                                                                <div className='input-icon'>
                                                                    <i className='fa fa-user'></i>
                                                                    <input id="Occupation" type="text" placeholder="Occupation" className='form-control'/></div>
                                                            </div>
                                                    </div>
                                                    </div> 
                                                    <hr />
                                                    
                                                <div className="form-actions text-right pal">
                                                    <button type="submit" id="btnCus" className="btn btn-primary save" onClick={this.saveData.bind(this)}>
                                                        Save</button>
                                                    <button type="submit" id="btnCus" className="btn btn-primary">
                                                        Cancel</button>
                                                </div>
                                                </div>
                                                </form>
                                            </div>
                                        </div>   
                                        </TabPanel>

                                        <TabPanel>
                                        <div className="panel panel-grey">
                                <div className="panel-heading">
                                    Customer register form</div>
                                    <div className="panel-body pan">
                                        
                                        <form action="#">
                                            <div className="form-body pal">
                                                <div className="row">
                                                <div className="col-md-4">
                                                            <div className="form-group">
                                                                <select className="form-control" placeholder="Title" id='Title'>
                                                                    <option value="Mr">Mr</option>
                                                                    <option value="Mrs">Mrs</option>
                                                                    <option value="Prof">Prof</option>
                                                                    <option value="Rev">Rev</option>
                                                                    <option value="Miss">Miss</option>
                                                                    <option value="Messrs">Messrs</option>
                                                                    <option value="Master">Master</option>
                                                                </select></div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                <i className="fa fa-user"></i>
                                                                <input id="NameCredentials" type="text" placeholder="Name With Credentials" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-user"></i>
                                                                    <input id="FullName" type="text" placeholder="Full Name" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        {/* <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-address-card"></i>
                                                                    <input id="inputNic" type="text" placeholder="NIC/Passport No" className="form-control" /></div>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <div className='input-icon'>
                                                                    <i className='fa fa-user'></i>
                                                                    <input id="AddressNo" type="text" placeholder="Address(Home No/ Street)" className='form-control'/></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="form-group">
                                                                <div className='input-icon'>
                                                                    <i className='fa fa-user'></i>
                                                                    <input id="AddressStreet" type="text" placeholder="Address" className='form-control'/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                            <select className="form-control" id='City'>
                                                                    <option value="City">City</option>
                                                                </select></div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                            <select className="form-control" id='District'>
                                                                    <option value="District">District</option>
                                                                </select></div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <select className="form-control" id='Country'>
                                                                    <option calue="Country">Country</option>
                                                                </select></div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                <i className="fa fa-user"></i>
                                                                <input id="IdentyNo" type="text" placeholder="Identiy Card Number" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                <i className="fa fa-user"></i>
                                                                <DatePicker 
                                                                    selected={this.state.date} 
                                                                    onChange={this.handleChange1} 
                                                                    placeholderText = "ID Date of Issue"
                                                                    className="form-control"/></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                <i className="fa fa-user"></i>
                                                                <DatePicker 
                                                                    selected={this.state.dateOB} 
                                                                    onChange={this.handleChange2} 
                                                                    placeholderText = "Date of Birth"
                                                                    className="form-control"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                    <div className="col-md-4">
                                                            <div className="form-group">
                                                                <select className="form-control" placeholder="Title" id='Gender'>
                                                                    <option>Select Gender</option>
                                                                    <option>Male</option>
                                                                    <option>Female</option>
                                                                </select></div>
                                                    </div>
                                                    <div className="col-md-6">
                                                    <div className="form-group">
                                                                <div className='input-icon'>
                                                                    <i className='fa fa-user'></i>
                                                                    <input id="Occupation" type="text" placeholder="Occupation" className='form-control'/></div>
                                                            </div>
                                                    </div>
                                                    </div> 
                                                    <hr />
                                                    
                                                <div className="form-actions text-right pal">
                                                    <button type="submit" id="btnCus" className="btn btn-primary save" onClick={this.saveData.bind(this)}>
                                                        Save</button>
                                                    <button type="submit" id="btnCus" className="btn btn-primary">
                                                        Cancel</button>
                                                </div>
                                                </div>
                                                </form>
                                            </div>
                                        </div>      
                                        </TabPanel>

                                        <TabPanel>
                                        <div className="panel panel-grey">
                                <div className="panel-heading">
                                    Customer register form</div>
                                    <div className="panel-body pan">
                                        
                                        <form action="#">
                                            <div className="form-body pal">
                                                <div className="row">
                                                <div className="col-md-4">
                                                            <div className="form-group">
                                                                <select className="form-control" placeholder="Title" id='Title'>
                                                                    <option value="Mr">Mr</option>
                                                                    <option value="Mrs">Mrs</option>
                                                                    <option value="Prof">Prof</option>
                                                                    <option value="Rev">Rev</option>
                                                                    <option value="Miss">Miss</option>
                                                                    <option value="Messrs">Messrs</option>
                                                                    <option value="Master">Master</option>
                                                                </select></div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                <i className="fa fa-user"></i>
                                                                <input id="NameCredentials" type="text" placeholder="Name With Credentials" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-user"></i>
                                                                    <input id="FullName" type="text" placeholder="Full Name" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        {/* <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-address-card"></i>
                                                                    <input id="inputNic" type="text" placeholder="NIC/Passport No" className="form-control" /></div>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <div className='input-icon'>
                                                                    <i className='fa fa-user'></i>
                                                                    <input id="AddressNo" type="text" placeholder="Address(Home No/ Street)" className='form-control'/></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="form-group">
                                                                <div className='input-icon'>
                                                                    <i className='fa fa-user'></i>
                                                                    <input id="AddressStreet" type="text" placeholder="Address" className='form-control'/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                            <select className="form-control" id='City'>
                                                                    <option value="City">City</option>
                                                                </select></div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                            <select className="form-control" id='District'>
                                                                    <option value="District">District</option>
                                                                </select></div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <select className="form-control" id='Country'>
                                                                    <option calue="Country">Country</option>
                                                                </select></div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                <i className="fa fa-user"></i>
                                                                <input id="IdentyNo" type="text" placeholder="Identiy Card Number" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                <i className="fa fa-user"></i>
                                                                <DatePicker 
                                                                    selected={this.state.date} 
                                                                    onChange={this.handleChange1} 
                                                                    placeholderText = "ID Date of Issue"
                                                                    className="form-control"/></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                <i className="fa fa-user"></i>
                                                                <DatePicker 
                                                                    selected={this.state.dateOB} 
                                                                    onChange={this.handleChange2} 
                                                                    placeholderText = "Date of Birth"
                                                                    className="form-control"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                    <div className="col-md-4">
                                                            <div className="form-group">
                                                                <select className="form-control" placeholder="Title" id='Gender'>
                                                                    <option>Select Gender</option>
                                                                    <option>Male</option>
                                                                    <option>Female</option>
                                                                </select></div>
                                                    </div>
                                                    <div className="col-md-6">
                                                    <div className="form-group">
                                                                <div className='input-icon'>
                                                                    <i className='fa fa-user'></i>
                                                                    <input id="Occupation" type="text" placeholder="Occupation" className='form-control'/></div>
                                                            </div>
                                                    </div>
                                                    </div> 
                                                    <hr />
                                                    
                                                <div className="form-actions text-right pal">
                                                    <button type="submit" id="btnCus" className="btn btn-primary save" onClick={this.saveData.bind(this)}>
                                                        Save</button>
                                                    <button type="submit" id="btnCus" className="btn btn-primary">
                                                        Cancel</button>
                                                </div>
                                                </div>
                                                </form>
                                            </div>
                                        </div>      
                                        </TabPanel>                       
                                    </div>
                    </div>
                    
                    </Tabs>
                </div>
                
                </div>
                
        )
    }
}

export default Customer;