import React from "react"
import Topbar from "./../topbar"
import Sidebar from "./../sidebar"
import userForm from "./../userForm"
import { Form, Button, Row, Col} from "react-bootstrap"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";


class items extends React.Component {

 constructor(props) {
   super(props);
   this.state = {
     title: 'React + Node',
     countries: []
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
    return (
      <div>
        <Topbar />
        <Sidebar />
        <div>
          <div id="page-wrapper">
            {/*BEGIN TITLE & BREADCRUMB PAGE*/}
            <div
              id="title-breadcrumb-option-demo"
              className="page-title-breadcrumb"
            >
              <div className="page-header pull-left">
                <div className="page-title">Higher Purchase - Items</div>
              </div>
              <ol className="breadcrumb page-breadcrumb pull-right">
                <li>
                  <i className="fa fa-home" />
                  &nbsp;<a href="dashboard.html">Home</a>&nbsp;&nbsp;
                  <i className="fa fa-angle-right" />
                  &nbsp;&nbsp;
                </li>
                <li className="hidden">
                  <a href="#">Higher Purchase</a>&nbsp;&nbsp;
                  <i className="fa fa-angle-right" />
                  &nbsp;&nbsp;
                </li>
                <li className="active">Higher Purchase</li>
              </ol>
              <div className="clearfix" />
            </div>
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
                  <TabList>
                    <Tab>Add</Tab>
                    <Tab>Edit</Tab>
                    <Tab>Delete</Tab>
                    <Tab>View</Tab>
                  </TabList>

                  <TabPanel>
                    <p>Vehicle - Add</p>
                    <div className="page-content">
                      <Form ref="countryForm">
                        <Form.Row>
                          <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Vehicle Number</Form.Label>
                            <Form.Control type="text" ref="vehicle_no" placeholder="Enter Vehicle Number" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Chassis Number</Form.Label>
                            <Form.Control type="text" ref="chassis_no" placeholder="Enter Chassis Number" />
                          </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                          <Form.Label>Engine Number</Form.Label>
                          <Form.Control type="text" ref="engine_no" placeholder="Enter Engine Number" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                          <Form.Label>Vehicle Model</Form.Label>
                          <Form.Control type="text" ref="model" placeholder="Enter Vehicle Model" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                          <Form.Label>Vehicle Make</Form.Label>
                          <Form.Control type="text" ref="make" placeholder="Enter Vehicle Make" />
                        </Form.Group>
                        
                        <Form.Group controlId="formGridAddress2">
                          <Form.Label>Vehicle Color</Form.Label>
                          <Form.Control type="text" ref="color" placeholder="Enter Vehicle Color" />
                        </Form.Group>
                        
                        <Form.Group controlId="formGridAddress2">
                          <Form.Label>Vehicle Image</Form.Label>
                          <Form.Control  ref="vehicle_image"  type="file"/>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                          <Form.Label>Customer ID</Form.Label>
                          <Form.Control type="text"  ref="customer_id" placeholder="Cutomer ID" />
                        </Form.Group>

                        <Form.Group id="formGridCheckbox">
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                       <button onClick={this.addCountry.bind(this)}>ADD</button>
                        <Button variant="danger"  type="reset">Reset</Button>
                      </Form>
                      
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
      
                    </div>
                  </TabPanel>
              </Tabs>
            </TabPanel>
            <TabPanel>
            <Tabs>
                  <TabList>
                    <Tab>Add</Tab>
                    <Tab>Edit</Tab>
                    <Tab>Delete</Tab>
                    <Tab>View</Tab>
                  </TabList>

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
              </Tabs>
            </TabPanel>
            <TabPanel>
            <Tabs>
                  <TabList>
                    <Tab>Add</Tab>
                    <Tab>Edit</Tab>
                    <Tab>Delete</Tab>
                    <Tab>View</Tab>
                  </TabList>

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
              </Tabs>
            </TabPanel>
  </Tabs>
            {/*END CONTENT*/}
            {/*END FOOTER*/}
          </div>
        </div>
      </div>
    );
  }
}

export default items;
