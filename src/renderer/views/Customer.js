import React from 'react'
import Topbar from '../components/customerPage/topbar'
import Sidebar from './../components/customerPage/sidebar'
import Body from './../components/customerPage/Body'
import CustomerPage from './../components/customerPage/Customer'


class Customer extends React.Component {
  render() {
    return <div>
      <Topbar/>
    <Sidebar/>
    </div>
  }
}

export default Customer