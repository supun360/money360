import React from 'react'
import ReactTable from "react-table"
import 'react-table/react-table.css'

class UserForm extends React.Component {

  constructor(prop){
    super(prop);
    this.state = {
        customer: [],
        show: false,
        hide: true
      }
    //   this.closeCus();
      
    //$('#cusBack').hide();
}

hideCom(){
    this.setState({
      show: false,
      hide: true
    })
  } 

    render() {
      const data = [{
        name: 'John Doe',
        actype: 'Savings',
        savings: {
          date: '17-01-2019',
          value: 3700000,
          status: 'Active',
        }
      },]
      
      const columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Account type',
        accessor: 'actype',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
        id: 'Higher Purchases', // Required because our accessor is not a string
        Header: 'Created date',
        accessor: d => d.savings.date // Custom value accessors!
      }, {
        Header: props => <span>Value</span>, // Custom header components!
        accessor: 'savings.value'
      },
      {
        Header: props => <span>Status</span>, // Custom header components!
        accessor: 'savings.status'
      }
    ]



      return (
        <div>

            <form action="#" className="form-horizontal">
                <div className="form-body pal">
                    <div className="form-group">
                        <label htmlFor="inputName" className="col-md-3 control-label">
                            Search :- </label>
                        <div className="col-md-9">
                            <div className="input-icon">
                                <i className="fa fa-user"></i>
                                    <input id="inputName" type="text" placeholder="Search by id" className="form-control" style={{display: 'inline-block', width: '70%' }}/>
                                    <a href="#" className="btn btn-primary" id="searchBtn" style={{display: 'inline-block'}} >Search</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

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
        <br/>
        <div className="text-center mbl"><a style = {{marginTop:'20px'}} onClick={()=>this.props.hideCom()} href="#" className="btn btn-green"><i className="fa fa-plus-square" />&nbsp;
                Create new account</a>
        </div>  
        </div>
      );
    }
}

export default UserForm