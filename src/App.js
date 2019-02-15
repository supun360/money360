import React from 'react'
import { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './renderer/assets/stylesheets/App.css'
import Index from './renderer/components/indexPage/index'
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