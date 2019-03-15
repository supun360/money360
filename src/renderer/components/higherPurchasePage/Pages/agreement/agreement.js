import React from 'react';
import { Page, Text, View,Image, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import vehicleimg from './../../../../assets/images/vehicle/vehicle.jpg'
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    borderBottom: 1,
    //width:'200px',
    // height:'700px'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: 1,
  },
  viewer:{
    width: '100%',
    height: '624px'
  },
  header:{
    textAlign: 'center',
    fontSize: 40
  },
  header2:{
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 20,
    paddingTop: 10
  },
  title:{
    textAlign: 'center',
    fontSize: 25,
    borderBottom: 1,
    
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },

});


var data = {
  companyName: 'I360 Pvt Ltd',
  Title: 'Vehicle Higher Purchasing Agreement',
  user:{
    Name: 'A.D.S.Nimesh',
    Address: '533/1, Batagama South, Kandana',
    Telephone: '0774560583',
  },
  vehicle:{

  },
  paymentDetails:{

  },
}


// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>{data.companyName}</Text>
        <Text style={styles.title}>{data.Title}</Text>
        <Text style={styles.header2}>Customer Details</Text>
        <Text>NIC: </Text>
        <Text>Name: </Text>
        <Text>Address: </Text>
        <Text>Tel: </Text>
        <Text style={styles.header2}>Vehicle Deatils</Text>
        <Text>Vehicle No: </Text>
        <Text>Vehicle Chassi No: </Text>
        <Text>Engine No: </Text>
        <Text>Vehicle Model: </Text>
        <Text>Vehicle Made Year: </Text>
        <Text>Vehicle Color: </Text>
        <Text style={styles.header2}>Payment Details</Text>
        <Text>Monthly Rental:</Text>
        <Text>Due dates:</Text>
        <Text>Interest:</Text>
       {/* /</View>/ <></ */}
      </View>
    </Page>
  </Document>
);

class agreement extends React.Component {
    render() {
      return (
        
          <div>
    {/*BEGIN TITLE & BREADCRUMB PAGE*/}
    <div id="title-breadcrumb-option-demo" className="page-title-breadcrumb">
      <div className="page-header pull-left">
        <div className="page-title">
          Higher Purchase - Agreement</div>
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
    <PDFViewer style={styles.viewer}>
      <MyDocument/>
    </PDFViewer>
    </div>
    {/*END CONTENT*/}
    {/*END FOOTER*/}
  </div>
        
      )
    }
  }
  
  export default agreement