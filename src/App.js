import React, { Component } from 'react';
import { Redirect } from 'react-router'
import Router from './router'
import Email from './components/Email'
import Password from './components/Password'
import Timezones from './components/Timezones'
import Nav from './components/Nav'

const Header = () => (
  <header className="App-header">
    <h3 className="App-title">
      Registration
    </h3>
  </header>);

const App = () => {
  <div className = "App" >
    <Header/>
    <Router/>

  </div>
}

export default App


