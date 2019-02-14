import React, { Component } from 'react';
import $ from 'jquery'
import axios from 'axios'

class Customer extends Component {

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

        axios.post('/user', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            country: country,
            city: city,
            postal: postal,
            address: address
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        alert('First Name:-'+firstName+'\n'+'Last Name:-'+lastName)
    }

    render() {
        return (
            <div classNameName='Customer'>
                <div id="page-wrapper">
                
                <div className="page-content" style={{width: '100%', marginleft: 0}}>
                    <div className="col-md-12">
                <ul className="nav nav-tabs">
                    <li className="active"><a href="#tab-edit" data-toggle="tab" onclick="emptyForm();">Add</a></li>
                    <li><a href="#tab-messages" data-toggle="tab" onclick="fillForm();">Edit</a></li>
                    <li><a href="#tab-messages" data-toggle="tab" onclick="remForm();">Delete</a></li>
                </ul>
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
                                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Customer;