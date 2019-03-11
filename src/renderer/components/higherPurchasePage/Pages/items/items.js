import React from "react"
import Topbar from "./../../../topbar/index"
//import Sidebar from "./sidebar"
//import './../../stylesheets/bootstrapreact/new.css'
import './../../../../assets/stylesheets/bootstrapreact/new11.css'
//import userForm from "../../userForm"
import $ from 'jquery'
import { Form, Button, Row, Col} from "react-bootstrap"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import axios from 'axios'
import uuidv1 from 'uuid/v1'

class items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'React + Node',
      vehicles: []
    }
  }

  componentDidMount(){
    console.log('COMPONENT HAS MOUNTED');
    var that = this;
    fetch('http://localhost:8080/api/getVehicles')
      .then(function(response){
        response.json()
         .then(function(data){
           console.log('response')
           that.setState({
             vehicles: data
           })
           console.log('1234',data);
         })
      })
      
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
    const vehicle_no = $('#inputVehicle').val();
    const chassis_no = $('#inputChassi').val();
    const engine_no = $('#engineNumber').val();
    const model = $('#vehicleModel').val();
    const make = $('#vehicleMadeYear').val();
    const color = $('#vehicleColor').val();
    const vehicle_image = $('#carImage').val();
    const customer_id = uuidv1;
    //const nic = $('#inputNic').val();

    if(vehicle_no.length != 0 && chassis_no.length != 0 && engine_no.length != 0 && model.length != 0 && make.length != 0 && color.length != 0 && customer_id.length != 0){
    axios.post('http://localhost:8080/api/add-vehicles', {
        vehicle_no: vehicle_no,
        chassis_no: chassis_no,
        engine_no: engine_no,
        model: model,
        make: make,
        color: color,
        vehicle_image: vehicle_image,
        customer_id: customer_id,
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

  //AJAX Calls
  componentDidMount() {
    console.log('COMPONENT HAS MOUNTED');
    var that = this;
    fetch('http://localhost:3000/api/countries')
      .then(function (response) {
        response.json()
          .then(function (data) {
            that.setState({
              countries: data
            })
          })
      })
  }
 
   addCountry(event) {
     var that = this;
     event.preventDefault();
     let country_data = {
       vehicle_no: this.refs.vehicle_no.value,
       chassis_no: this.refs.chassis_no.value,
       engine_no: this.refs.engine_no.value,
       model: this.refs.model.value,
       make: this.refs.make.value,
       color: this.refs.color.value,
       vehicle_image: this.refs.vehicle_image.value,
       customer_id: this.refs.customer_id.value
     };
     var request = new Request('http://localhost:3000/api/new-country', {
       method: 'POST',
       headers: new Headers({
         'Content-Type': 'application/json'
       }),
       body: JSON.stringify(country_data)
     });
 
     let countries = that.state.countries;
     countries.push(country_data);
     console.log(countries);
     that.setState({
       countries: countries
     })
 
     //xml-htttp requests
     //console.log(this.state.countries);
     fetch(request)
       .then(function (response) {
         response.json()
           .then(function (data) {
 
           })
       })
       .catch(function (err) {
         console.log(err)
       })
   }



  render() {
    let vehicles = this.state.vehicles;
    return (

          <div>
            {/*BEGIN TITLE & BREADCRUMB PAGE*/}
            <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
      <div className="page-header pull-left">
        <div className="page-title">
          Higher Purchase - Items</div>
      </div>
      <ol className="breadcrumb page-breadcrumb pull-right">
        <li><i className="fa fa-home" />&nbsp;<a href="dashboard.html">Home</a>&nbsp;&nbsp;<i className="fa fa-angle-right" />&nbsp;&nbsp;</li>
        <li className="hidden"><a href="#">Higher Purchase</a>&nbsp;&nbsp;<i className="fa fa-angle-right" />&nbsp;&nbsp;</li>
        <li className="active">Higher Purchase</li>
      </ol>
      <div className="clearfix">
      </div>
    </div>
    <div className="col-md-15">
            {/*END TITLE & BREADCRUMB PAGE*/}
            {/*BEGIN CONTENT*/}
            <Tabs>
              <TabList>
                  <Tab>Vehicles</Tab>
                  <Tab>Lands</Tab>
                  <Tab>Other</Tab>
              </TabList>

              <TabPanel>
                <Tabs>
                <div className="page-content" style={{width: '100%', marginleft: 'calc(100% - 90%)'}}>
                    <div className="col-md-12"></div>
                <ul className="nav nav-tabs">
                  <TabList>
                    <Tab>Add</Tab>
                    <Tab>Edit</Tab>
                    <Tab>Delete</Tab>
                    <Tab>View</Tab>
                  </TabList>
                    </ul>
                  <TabPanel>
                    <div className="panel panel-grey">
                                <div className="panel-heading">
                                   Vehicle Registration Form</div>
                                    <div className="panel-body pan">
                                        <form action="#">
                                            <div className="form-body pal">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <div className="input-icon">
                                                                <i className="fa fa-car"></i>
                                                                <input id="inputVehicle" type="text" ref="vehicle_no" placeholder="Vehicle Number" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-plus"></i>
                                                                    <input id="inputChassi" type="text" ref="chassis_no" placeholder="Vehicle Chassi Number" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-circle"></i>
                                                                    <input id="engineNumber" type="text" ref="engine_no" placeholder="Engine Number" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-plus"></i>
                                                                    <input id="vehicleModel" type="text" ref="model" placeholder="Vehicle Model" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-plus"></i>
                                                                    <input id="vehicleMadeYear" type="text" ref="make" placeholder="Vehicle Made Year" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <div className="input-icon">
                                                                    <i className="fa fa-plus"></i>
                                                                    <input id="vehicleColor" type="text" ref="color" placeholder="Vehicle Color" className="form-control" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <input id="carImage" type="file" ref="vehicle_image" placeholder="Vehicle Image" className="form-control" />
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
                    <p>Vehicle - Edit</p>
                    <div className="page-content">
      
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p>Vehicle - Delete</p>
                    <div className="page-content">
      
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p>Vehicle - View</p>
                    <div className="page-content">
                    
            <div className="panel panel-default p30 uth-panel">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Vehicle No</th>
                            <th>Chassis No</th>
                            <th>Engine No</th>
                            <th>Model</th>
                            <th>Make</th>
                            <th>Colour</th>
                            <th>Vehicle Image</th>
                            <th>Customer ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {vehicles.map(vehicle =><tr key={vehicle.customer_id}>
                        <td>{vehicle.vehicle_no}</td>
                        <td>{vehicle.chassis_no}</td>
                        <td>{vehicle.engine_no}</td>
                        <td>{vehicle.model}</td>
                        <td>{vehicle.make}</td>
                        <td>{vehicle.color}</td>
                        <td>{vehicle.vehicle_image}</td>
                        <td>{vehicle.customer_id}</td>
                        <td><button onClick={this.update.bind(this, vehicle.customer_id)}>Edit</button>|<button onClick={this.removeCountry.bind(this, vehicle.customer_id)}>Remove</button></td>
                    </tr>
                    
                    )}
                    </tbody>
                  </table>
                </div>
                    </div>
                  </TabPanel>
                  </div>
              </Tabs>
            </TabPanel>
            <TabPanel>
            <Tabs>
            <div className="page-content" style={{width: '100%', marginleft: 'calc(100% - 90%)'}}>
                    <div className="col-md-12"></div>
                <ul className="nav nav-tabs">
                  <TabList>
                    <Tab>Add</Tab>
                    <Tab>Edit</Tab>
                    <Tab>Delete</Tab>
                    <Tab>View</Tab>
                  </TabList>
</ul>
                  <TabPanel>
                    <p>Lands - Add</p>
                    <div className="page-content">
      
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p>Lands - Edit</p>
                    <div className="page-content">
      
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p>Lands - Delete</p>
                    <div className="page-content">
      
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p>Lands - View</p>
                    <div className="page-content">
      
                    </div>
                  </TabPanel>
                  </div>
              </Tabs>
            </TabPanel>
            <TabPanel>
            <Tabs>
            <div className="page-content" style={{width: '100%', marginleft: 'calc(100% - 90%)'}}>
                    <div className="col-md-12"></div>
                <ul className="nav nav-tabs">
                  <TabList>
                    <Tab>Add</Tab>
                    <Tab>Edit</Tab>
                    <Tab>Delete</Tab>
                    <Tab>View</Tab>
                  </TabList>
</ul>
                  <TabPanel>
                    <p>Other - Add</p>
                    <div className="page-content">
      
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p>Other - Edit</p>
                    <div className="page-content">
      
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p>Other - Delete</p>
                    <div className="page-content">
      
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p>Other - View</p>
                    <div className="page-content">
      
                    </div>
                  </TabPanel>
                  </div>
              </Tabs>
            </TabPanel>
  </Tabs>
  </div>
            {/*END CONTENT*/}
            {/*END FOOTER*/}
          </div>
        
    );
  }
}

export default items;
