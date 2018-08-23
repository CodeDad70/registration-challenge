import React from "react";
import { BrowserRouter } from "react-router-dom";
import {Router,
  Route, 
  Switch,
}from 'react-router-dom'
import Email from './components/Email'
import Password from './components/Password'
import Timezones from './components/Timezones'

export default () => (
  <Router>
    <Switch>
      <Route exact path = "/email" component={Email}/>
      <Route exact path = "/password" component={Password}/>
      <Route exact path = '/timezones' comoponent={Timezones}/>
      </Switch>
  </Router>    
)


