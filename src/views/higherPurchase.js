import React from 'react'
import Topbar from '../components/indexPage/topbar'
import Sidebar from './../components/higherPurchasePage/sidebar'
//import UserForm from './../components/higherPurchasePage/userForm'
import './../../src/stylesheets/main.css'
//import './../../stylesheets/jquery-ui-1.10.4.custom.min.css'
import './../../src/stylesheets/font-awesome.min.css'
import './../../src/stylesheets/bootstrap.min.css'
import './../../src/stylesheets/animate.css'
import './../../src/stylesheets/all.css'
import './../../src/stylesheets/style-responsive.css'
import './../../src/stylesheets/zabuto_calendar.min.css'
import './../../src/stylesheets/pace.css'
import './../../src/stylesheets/jquery.news-ticker.css'
class HigherPurchase extends React.Component {
  render() {
    return <div><Topbar/>
    <Sidebar/>
    
    </div>
  }
}

export default HigherPurchase