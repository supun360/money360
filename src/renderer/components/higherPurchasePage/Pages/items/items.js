import React from "react"
import Topbar from "./../../../topbar/index"
//import Sidebar from "./sidebar"
//import './../../stylesheets/bootstrapreact/new.css'
import './../../../../assets/stylesheets/bootstrapreact/new11.css'
//import userForm from "../../userForm"
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
                  <TabList>
                    <Tab>Add</Tab>
                    <Tab>Edit</Tab>
                    <Tab>Delete</Tab>
                    <Tab>View</Tab>
                  </TabList>

                  <TabPanel>
                    <p>Vehicle - Add</p>
                    <div className="">
                    <Form>                 
<Form.Row>
<Col>
  <Form.Group as={Col} controlId="formGridText  ">
    <Form.Label>Vehicle Number</Form.Label>
    <Form.Control type="text" ref="vehicle_no" placeholder="Enter Vehicle Number" />
  </Form.Group>
</Col>
<Col>
  <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label>Chassis Number</Form.Label>
    <Form.Control type="text" ref="chassis_no" placeholder="Enter Chassis Number" />
  </Form.Group>
  </Col>
</Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>;
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
  </div>
            {/*END CONTENT*/}
            {/*END FOOTER*/}
          </div>
        
    );
  }
}

export default items;
