import React, { Component } from 'react';
import { Redirect } from 'react-router'
import Router from './router'
import Email from './components/Email'
import Password from './components/Password'
import Timezones from './components/Timezones'
import Nav from './components/Nav'

class MainWrapper extends Component {

  constructor(props) {
    super(props)
      this.state = {
      email:"",
      password: "",
      timezone:"",
          
    }
  }

 updateState = (value) => {
  this.setState({ 
    key: value
  })
 }
       
  render() {
    return (
      <div>
        <Router/>
    </div>
    )
  }
}

export default MainWrapper


