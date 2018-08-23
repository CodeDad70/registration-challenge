import React, { Component } from 'react';
import { Redirect } from 'react-router'

class Email extends Component {

  constructor() {
    super()
      this.state = {
      email:'',
      password: '',
      timezone:'',
      fireRedirect: false,     
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = this.getEmail.value;
    const data = {
      id: new Date(),
      searchValue
    }
    console.log(data)
  }

  render() {
    const { fireRedirect } = this.state
    return (
      <div>
      <form onSubmit={this.handleSubmit}>

      <input 
        className="searchbox" 
        required type="text" 
        ref={(input) => this.getEmail = input}
        placeholder="Enter your email "
      />

      <button className="button" >Submit</button>

    </form>

    {fireRedirect&& <Redirect to={`/password`} />}
    </div>
    )
  }
}

export default Email 

