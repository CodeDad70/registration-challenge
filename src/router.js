
import React from "react";

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import AddEmail from './components/AddEmail'
import Password from './components/Password'
import Timezones from './components/Timezones'
import Nav from './components/Nav'



export default () => (

  <BrowserRouter >
   <div>
      <Route exact path="/" component={AddEmail} />
      <Route exact path="/email" component={AddEmail} />
      <Route exact path="/password" component={Password} />
      <Route exact path="/timezones" component={Timezones} />
      <Nav/>
   </div>
  </BrowserRouter>
)