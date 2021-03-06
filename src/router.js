
import React from "react";

import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import AddEmail from './components/AddEmail'
import AddPassword from './components/AddPassword'
import Timezones from './components/Timezones'
import Nav from './components/Nav'
import Emails from './components/Emails'
import Passwords from './components/Passwords'



export default () => (

  <BrowserRouter >
   <div>
      <Route exact path="/" component={AddEmail} />
      <Route exact path="/email" component={AddEmail} />
      <Route exact path="/password" component={AddPassword} />
      <Route exact path="/timezones" component={Timezones} />
     
      <Nav/>
   </div>
  </BrowserRouter>
)