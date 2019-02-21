import React, { Component } from 'react';
import $ from 'jquery'
import axios from 'axios'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { relative } from 'path';
//import boostrap from '../script/bootstrap.min.js'

class Customer extends Component {

    constructor(prop){
        super(prop);
        this.state = {
            customer: []
          }
    }

    updateData(e){
        e.preventDefault();
        const firstName = $('#upinputFirstName').val();
        const lastName = $('#upinputLastName').val();
        const email = $('#upinputEmail').val();
        const phone = $('#upinputPhone').val();
        const country = $('#upcountry').val();
        const city = $('#upinputCity').val();
        const postal = $('#upinputPostCode').val();
        const address = $('#upinputAddress').val();
        const nic = $('#upinputNic').val();

        if(firstName.length != 0 && lastName.length != 0 && email.length != 0 && phone.length != 0 && country.length != 0 && city.length != 0 && postal.length != 0 && address.length != 0 && nic.length != 0){
            axios.post('http://localhost:8080/update', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                country: country,
                city: city,
                nic: nic,
                postal: postal,
                address: address
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
        const firstName = $('#inputFirstName').val();
        const lastName = $('#inputLastName').val();
        const email = $('#inputEmail').val();
        const phone = $('#inputPhone').val();
        const country = $('#country').val();
        const city = $('#inputCity').val();
        const postal = $('#inputPostCode').val();
        const address = $('#inputAddress').val();
        const nic = $('#inputNic').val();

        if(firstName.length != 0 && lastName.length != 0 && email.length != 0 && phone.length != 0 && country.length != 0 && city.length != 0 && postal.length != 0 && address.length != 0 && nic.length != 0){
        axios.post('http://localhost:8080/add', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            country: country,
            city: city,
            nic: nic,
            postal: postal,
            address: address
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
                <div className="page-content" style={{width: '80%', marginleft: 'calc(100% - 90%)'}}>
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
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                <i className="fa fa-user"></i>
                                                                <input id="inputFirstName" type="text" placeholder="First Name" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-user"></i>
                                                                    <input id="inputLastName" type="text" placeholder="Last Name" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-envelope"></i>
                                                                    <input id="inputEmail" type="text" placeholder="E-mail" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-phone"></i>
                                                                    <input id="inputPhone" type="text" placeholder="Phone" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-address-card"></i>
                                                                    <input id="inputNic" type="text" placeholder="NIC/Passport No" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <select className="form-control" id='country'>
                                                                    <option>Country</option>
                                                                </select></div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <input id="inputCity" type="text" placeholder="City" className="form-control" /></div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <input id="inputPostCode" type="text" placeholder="Post code" className="form-control" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="inputAddress" type="text" placeholder="Address" className="form-control" /></div>
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
                                    Customer details</div>
                                    <div className="panel-body pan">
                                        <form action="#">
                                            <div className="form-body pal">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                <i className="fa fa-user"></i>
                                                                <input id="upinputFirstName" type="text" defaultValue={cusFName} placeholder="First Name" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-user"></i>
                                                                    <input id="upinputLastName" type="text" defaultValue={cusLName} placeholder="Last Name" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-envelope"></i>
                                                                    <input id="upinputEmail" defaultValue={cusEmail} type="text" placeholder="E-mail" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-phone"></i>
                                                                    <input id="upinputPhone" type="text"defaultValue={cusTel} placeholder="Phone" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-address-card"></i>
                                                                    <input id="upinputNic" type="text" placeholder="NIC/Passport No" onChange={this.searchData.bind(this)} className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <select className="form-control" id='upcountry'>
                                                                    <option>Country</option>
                                                                </select></div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <input id="upinputCity" defaultValue={cusCity} type="text" placeholder="City" className="form-control" /></div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <input id="upinputPostCode" defaultValue={cusPostalCode} type="text" placeholder="Post code" className="form-control" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="upinputAddress" defaultValue={cusAddress} type="text" placeholder="Address" className="form-control" /></div>
                                                    <hr />
                                                    
                                                <div className="form-actions text-right pal">
                                                    <button type="submit" id="btnCus" className="btn btn-primary save" onClick={this.updateData.bind(this)} >
                                                        Update</button>
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
                                    Customer details</div>
                                    <div className="panel-body pan">
                                        <form action="#">
                                            <div className="form-body pal">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                <i className="fa fa-user"></i>
                                                                <input id="deinputFirstName" type="text" value={cusFName} placeholder="First Name" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-user"></i>
                                                                    <input id="deinputLastName" type="text" value={cusLName} placeholder="Last Name" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-envelope"></i>
                                                                    <input id="deinputEmail" type="text" value={cusEmail} placeholder="E-mail" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-phone"></i>
                                                                    <input id="deinputPhone" type="text" value={cusTel} placeholder="Phone" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-address-card"></i>
                                                                    <input id="deinputNic" type="text" onChange={this.searchDataForDelete.bind(this)} placeholder="NIC/Passport No" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <select className="form-control" id='decountry'>
                                                                    <option>Country</option>
                                                                </select></div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <input id="deinputCity" type="text" value={cusCity} placeholder="City" className="form-control" /></div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <input id="deinputPostCode" type="text" value={cusPostalCode} placeholder="Post code" className="form-control" /></div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <input id="deinputAddress" type="text" value={cusAddress} placeholder="Address" className="form-control" /></div>
                                                    <hr />
                                                    
                                                <div className="form-actions text-right pal">
                                                    <button type="submit" id="btnCus" className="btn btn-primary save" onClick={this.deleteData.bind(this)} >
                                                        Delete</button>
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