import React, { Component } from 'react';
import { Redirect } from 'react-router'

class Email extends Component {

  constructor() {
    super()
      this.state = {
      email:this.state,
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
    
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(this.getEmail.value))
    
       { 
        this.state.email =this.getEmail.value
        
        
       console.log(this.state)
       return console.log("done")
       console.log("inside set state",this.getEmail.value)
         console.log(this.state)
       } else
         alert("Please enter an valid email address\n(example: name@email.com) ")
         return (false)
     }
       
  render() {
    const { fireRedirect } = this.state
   
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

