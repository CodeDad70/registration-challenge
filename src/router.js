
import React from "react";

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import Email from './components/Email'
import Password from './components/Password'
import Timezones from './components/Timezones'


export default () => (

  <BrowserRouter >
    <Switch>
      <Route exact path="/" component={Email} />
      <Route exact path="/email" component={Email} />
      <Route exact path="/password" component={Password} />
      <Route exact path="/timezones" component={Timezones} />

    </Switch>
  </BrowserRouter>
)