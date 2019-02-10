import React, { Component } from 'react';
import ReactDOM from "react-dom";
import $ from 'jquery'

class Body extends Component {
    
    goCus(){
        window.location = 'customer.html';
        $('#customerForm').hide();
        $('#cusBack').css('display','none');
    }
    
    Close(){
        $('#full_form2').hide();
    }
    
    customeForm(){
        $('#customerForm').hide();
        $('#full_form2').show();
        $('#cusBack').css('display','none');
    }

    buttonClicked() {
        var searchText = document.getElementById("inputName").value;
        if (searchText !== '952290975V') {
            $('#customerForm').show();
            $('#cusBack').css('display','block');
            
            setTimeout(function() {
                $('#anim').css('display','block');
            }, 10);

            setTimeout(function() {
                $('#anim').css('display','none');
            }, 2000);
        }else{
            $('#full_form2').show();
            $('#customerForm').hide();
            
            $('#profile').text("Profile: Lasith Madushanka");
            $('#username').text("Lasith Madushanka");
            $('#email').text("lasith@i-threesixty.com");
            $('#address').text("220/1/C, Pahala Imbulgoda, Imbulgoda");
            $('#status').css('display','block');
            $('#rate').css('display','block');
            $('#date').text("02/01/2019");
            setTimeout(function() {
                $('#suce').css('display','block');
            }, 10);
            setTimeout(function() {
                $('#suce').css('display','none');
            }, 2000);
        }
    }

    closeCus(){
        $('#profile').text("");
        $('#username').text("");
        $('#email').text("");
        $('#address').text("");
        $('#status').css('display','none');
        $('#rate').css('display','none');
        $('#date').text("");
        $('#customerForm').hide();
        $('#cusBack').css('display','none');
    }

    render() {
        return (
            <div className='Body'>
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

        <div className="page-content">
            
            <form action="#" className="form-horizontal">
                <div className="form-body pal">
                    <div className="form-group">
                        <label htmlFor="inputName" className="col-md-3 control-label">
                            Search :- </label>
                        <div className="col-md-9">
                            <div className="input-icon">
                                <i className="fa fa-user"></i>
                                    <input id="inputName" type="text" placeholder="Search by name" className="form-control" style={{display: 'inline-block', width: '70%' }}/>
                                    <a href="#" className="btn btn-primary" id="searchBtn" style={{display: 'inline-block'}} onClick={this.buttonClicked}>Search</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            <div id="cusBack">
                <div id="customerForm" style={{width: '350px', marginLeft: 'calc(50% - 5%)', marginTop: "calc(50% - 40%)", zIndex: 999}}>
                    <div className="panel-grey popup">
                            <h3 id="qes">Do you want to create a new Account?</h3>
                        <div className="form-group mbn btnYN" id="buttonGroup">
                                <a href="#" className="btn btn-primary" id="butn" onClick={this.goCus}>Yes</a>&nbsp;&nbsp;
                                <button type="submit" className="btn btn-primary" id="butn" onClick={this.closeCus}>
                                        No</button>
                    </div>
                </div>
            </div>
        </div>

            <div id="tab-general">
                <div className="row mbl">
                    <div className="col-lg-12">
                        
                                    <div className="col-md-12">
                                        <div id="area-chart-spline" style={{width: "100%", height: "300px", display: "none"}}>
                                        </div>
                                    </div>
                        
                    </div>

                    <div className="col-lg-12">
                    
        <div id="full_form2">                  
        <div className="row">
            <div className="col-md-12"><h2 id="profile">Profile:</h2>

                <div className="row mtl">
                    <div className="col-md-3">
                        <table className="table table-striped table-hover">
                            <tbody>
                            <tr>
                                <td>User Name</td>
                                <td id="username"></td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td id="email"></td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td id="address"></td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td id="status" style={{display: 'none'}}><span className="label label-success" >Active</span></td>
                            </tr>
                            <tr>
                                <td>User Rating</td>
                                <td id="rate" style={{display: 'none'}}><i className="fa fa-star text-yellow fa-fw"></i><i className="fa fa-star text-yellow fa-fw"></i><i className="fa fa-star text-yellow fa-fw"></i><i className="fa fa-star text-yellow fa-fw"></i><i className="fa fa-star text-yellow fa-fw"></i></td>
                            </tr>
                            <tr>
                                <td>Member Since</td>
                                <td id="date"></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-9">
        {/* <!--<ul className="nav nav-tabs">
                            <li className="active"><a href="#tab-edit" data-toggle="tab">Add</a></li>
                            <li><a href="#tab-messages" data-toggle="tab">Edit</a></li>
                            <li><a href="#tab-messages" data-toggle="tab">Delete</a></li>
                        </ul> --> */}
                        <div id="tab-general">
                <div id="sum_box" className="row mbl">
                    <div className="col-sm-6 col-md-3">
                        <div className="panel profit db mbm">
                            <div className="panel-body">
                                <p className="icon">
                                    <i className="icon fa fa-money"></i>
                                </p>
                                <h4 className="value">
                                    <span data-counter="" data-start="10" data-end="50" data-step="1" data-duration="0">
                                    </span><span>$1500</span></h4>
                                <p className="description">
                                    Sevings Account</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="panel income db mbm">
                            <div className="panel-body">
                                <p className="icon">
                                    <i className="icon fa fa-car"></i>
                                </p>
                                <h4 className="value">
                                    <span>2500</span><span>$</span></h4>
                                <p className="description">
                                    Fixed Deposit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="panel income db mbm">
                            <div className="panel-body">
                                <p className="icon">
                                    <i className="icon fa fa-circle"></i>
                                </p>
                                <h4 className="value">
                                    <span>750</span><span>$</span></h4>
                                <p className="description">
                                    Goald Loans</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="panel income db mbm">
                            <div className="panel-body">
                                <p className="icon">
                                    <i className="icon fa fa-circle"></i>
                                </p>
                                <h4 className="value">
                                    <span>3500</span><span>$</span></h4>
                                <p className="description">
                                    Higher Purchase</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="panel income db mbm">
                            <div className="panel-body">
                                <p className="icon">
                                    <i className="icon fa fa-circle"></i>
                                </p>
                                <h4 className="value">
                                    <span>1000</span><span>$</span></h4>
                                <p className="description">
                                    Leasing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="panel income db mbm">
                            <div className="panel-body">
                                <p className="icon">
                                    <i className="icon fa fa-circle"></i>
                                </p>
                                <h4 className="value">
                                    <span>1500</span><span>$</span></h4>
                                <p className="description">
                                    Micro Finance</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="panel income db mbm">
                            <div className="panel-body">
                                <p className="icon">
                                    <i className="icon fa fa-circle"></i>
                                </p>
                                <h4 className="value">
                                    <span>3400</span><span>$</span></h4>
                                <p className="description">
                                    Mortgage Loans</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="panel income db mbm">
                            <div className="panel-body">
                                <p className="icon">
                                    <i className="icon fa fa-circle"></i>
                                </p>
                                <h4 className="value">
                                    <span>2300</span><span>$</span></h4>
                                <p className="description">
                                    Personal Loans</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="panel income db mbm">
                            <div className="panel-body">
                                <p className="icon">
                                    <i className="icon fa fa-circle"></i>
                                </p>
                                <h4 className="value">
                                    <span>1750</span><span>$</span></h4>
                                <p className="description">
                                    Power Draft</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="panel income db mbm">
                            <div className="panel-body">
                                <p className="icon">
                                    <i className="icon fa fa-circle"></i>
                                </p>
                                <h4 className="value">
                                    <span>2000</span><span>$</span></h4>
                                <p className="description">
                                    Savings Account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    
        </div>

                </div>
            </div>
        </div>

        </div>
        <script src="../src/script/main.js"></script>
        <script src="../src/script/other.js"></script>
    </div>
        );
    }
}

export default Body;
const rootElement = document.getElementById("root");
ReactDOM.render(<Body />, rootElement);