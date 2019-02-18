import React from 'react'
import ReactTable from "react-table"
import 'react-table/react-table.css'

class View extends React.Component {
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


return(
<div className ="col-md-9">
<ReactTable
defaultPageSize={10}
pageSizeOptions={[5,10,15]}
data={data}
columns={columns}
/>
</div>
);

}
}

export default View