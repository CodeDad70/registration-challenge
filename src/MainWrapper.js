import React, { Component } from 'react';
import { Redirect } from 'react-router'
import Router from './router'
import Email from './components/Email'
import Password from './components/Password'
import Timezones from './components/Timezones'

class MainWrapper extends Component {

  constructor(props) {
    super(props)
      this.state = {
      email:"",
      password: "",
      timezone:"",
      fireRedirect: false,     
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
        <h2>Main Wrapper</h2> 
          Main state : {this.state.key}
          <br/>
        <Email updateState={this.updateState}/>
      
    </div>
    )
  }
}

export default MainWrapper


