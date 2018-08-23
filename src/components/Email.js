import React, { Component } from 'react';
import { Redirect } from 'react-router'

class Email extends Component {

  constructor() {
    super()
      this.state = {
      emailFormData: '',
      email:'',
      password: '',
      timezone:'',
      fireRedirect: false,     
    }
  }

  handleOnChange = (e) => {
    console.log(this.getEmail.value)   
    localStorage.setItem('emailFormData', JSON.stringify(this.getEmail.value));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = this.getEmail.value;
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(searchValue))
       {
         console.log("okay")
       } else
         alert("Please enter an valid email address\n(example: name@email.com) ")
         return (false)
     }
       
  render() {
    const { fireRedirect } = this.state
    const { emailForm } = this.state.emailFormData
    let placeholder
    !localStorage.getItem('emailFormData') ?  placeholder = "Enter your email address" : placeholder = localStorage.getItem('emailFormData')
    return (
      <div>
      <form onSubmit={this.handleSubmit}>

      <input 
        className="searchbox" 
        required type="text" 
        ref={(input) => this.getEmail = input}
        onChange = {e => this.handleOnChange(e)}
        name= 'emailForm'
        placeholder={placeholder}
        value={this.getEmail}
      />

     
      <button className="button" >Submit</button>

    </form>

    {fireRedirect&& <Redirect to={`/password`} />}
    </div>
    )
  }
}

export default Email 

