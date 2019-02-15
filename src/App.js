import React from 'react'
//import Topbar from './renderer/components/topbar/index'
import Index from './renderer/components/indexPage/index'
//import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <div>
        <Index/>
      </div>
    )
  }
}

export default App