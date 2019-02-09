import React from 'react'
import Topbar from './components/indexPage/topbar'
import Sidebar from './components/indexPage/sidebar'
//import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <div>
        <Topbar/>
        <Sidebar/>
      </div>
    )
  }
}

export default App