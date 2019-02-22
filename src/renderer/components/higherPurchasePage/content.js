import React from 'react'
//import Topbar from './../topbar'
//import Sidebar from './../sidebar'
import $ from 'jquery'
import axios from 'axios'
import UserForm from './../higherPurchasePage/userForm'
class content extends React.Component {

  constructor(prop){
    super(prop);
    this.state = {
        customer: []
      }
}
  searchData(e){
    e.preventDefault();
    const nic = $('#inputName').val();
    if(nic.length >= 10){
        axios.post('http://localhost:8080/search', {
        nic: nic
      })
      .then((response) => {
            if(response.data.data.length === 1){
                this.setState({ customer: response.data.data});
                $('#status').css('display','block');
                $('#rate').css('display','block');
                $('#date').text("02/01/2019");    
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
                $('#customerForm').show();
                $('#full_form2').hide();
                $('#cusBack').css('display','block');
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
    }else{
        setTimeout(function() {
            $('#fmsg').html("<strong>Fail!</strong> Enter correct NIC/Passport No.");
            $('#Dmsg').css('display','block');
        }.bind(this),
        10);
        setTimeout(function() {
            $('#fmsg').html("<strong>Fail!</strong> Enter correct NIC/Passport No.");
            $('#Dmsg').css('display','none');
        }.bind(this),
        4000);
    }
}

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
    <form action="#" className="form-horizontal">
                <div className="form-body pal">
                    <div className="form-group">
                        <label htmlFor="inputName" className="col-md-3 control-label">
                            Search :- </label>
                        <div className="col-md-9">
                            <div className="input-icon">
                                <i className="fa fa-user"></i>
                                    <input id="inputName" type="text" placeholder="Search by name" className="form-control" style={{display: 'inline-block', width: '70%' }}/>
                                    <a href="#" className="btn btn-primary" id="searchBtn" style={{display: 'inline-block'}} onClick={this.searchData.bind(this)}>Search</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
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