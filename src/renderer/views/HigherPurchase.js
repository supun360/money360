import React from 'react'
import Topbar from '../components/indexPage/topbar'
import Sidebar from './../components/higherPurchasePage/sidebar'
import Content from './../components/higherPurchasePage/content'
//import UserForm from './../components/higherPurchasePage/userForm'
import './../assets/stylesheets/main.css'
//import './../../stylesheets/jquery-ui-1.10.4.custom.min.css'
import './../assets/stylesheets/font-awesome.min.css'
import './../assets/stylesheets/bootstrap.min.css'
import './../assets/stylesheets/animate.css'
import './../assets/stylesheets/all.css'
import './../assets/stylesheets/style-responsive.css'
import './../assets/stylesheets/zabuto_calendar.min.css'
import './../assets/stylesheets/pace.css'
import './../assets/stylesheets/jquery.news-ticker.css'
class HigherPurchase extends React.Component {
  render() {
    return <div><Topbar/>
    <Sidebar/>
    <Content/>
    </div>
  }
}

export default HigherPurchase