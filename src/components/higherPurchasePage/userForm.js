import React from 'react'
import ReactTable from "react-table"
import 'react-table/react-table.css'

class UserForm extends React.Component {
    render() {
      const data = [{
        name: 'John Doe',
        age: 26,
        higherPurchases: {
          type: 'Car-Honda Civic 2010',
          value: 3700000,
          status: 'paid',
        }
      },]
     
      const columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
        id: 'Higher Purchases', // Required because our accessor is not a string
        Header: 'Higher Purchases',
        accessor: d => d.higherPurchases.type // Custom value accessors!
      }, {
        Header: props => <span>Value</span>, // Custom header components!
        accessor: 'higherPurchases.value'
      },
      {
        Header: props => <span>Status</span>, // Custom header components!
        accessor: 'higherPurchases.status'
      }
    ]



      return (
        <div>
        <div className="col-md-3">
          <div className="form-group">
            <div className="text-center mbl"><img src="http://lorempixel.com/640/480/business/1/" alt="User" className="img-responsive" /></div>
            <div className="text-center mbl"><a href="#" className="btn btn-green"><i className="fa fa-upload" />&nbsp;
                Upload</a></div>
          </div>
          <table className="table table-striped table-hover">
            <tbody>
              <tr>
                <td>User Name</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>name@example.com</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>Street 123, Avenue 45, Country</td>
              </tr>
              <tr>
                <td>Status</td>
                <td><span className="label label-success">Active</span></td>
              </tr>
              <tr>
                <td>User Rating</td>
                <td><i className="fa fa-star text-yellow fa-fw" /><i className="fa fa-star text-yellow fa-fw" /><i className="fa fa-star text-yellow fa-fw" /><i className="fa fa-star text-yellow fa-fw" /><i className="fa fa-star text-yellow fa-fw" /></td>
              </tr>
              <tr>
                <td>Member Since</td>
                <td> Jun 03, 2014</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-9">
        <ReactTable
        defaultPageSize={10}
        pageSizeOptions={[5,10,15]}
    data={data}
    columns={columns}
  />
        </div>
        </div>
      );
    }
}

export default UserForm