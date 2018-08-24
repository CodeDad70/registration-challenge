import React, { Component } from 'react';
import { Redirect } from 'react-router'

class Password extends Component {


  handleOnChange = (e) => {
    localStorage.setItem('passwordFormData', JSON.stringify(e.target.value));
  }

  handleSubmit = (e) => {
    console.log('before values', this.props.state)
    e.preventDefault();   
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(this.getPassword.value))
      { 
        this.setState({ 
          password: this.getPassword.value,
          fireRedirect: true 
        })
        console.log(this.state)
      } else
         alert("Please enter an valid password\n(example: name@email.com) ")
  }
       
  render() {
    const { fireRedirect } = this.props.fireRedirect  
    let placeholder
    !localStorage.getItem('passwordFormData') ?  placeholder = "Enter a password" : placeholder = localStorage.getItem('passwordFormData')
    return (
      <div>
      <form onSubmit={this.handleSubmit}>

      <input 
        className="searchbox" 
        required type="text" 
        ref={(input) => this.getPassword = input}
        onChange = {e => this.handleOnChange(e)}
        name= 'passwordForm'
        placeholder={placeholder}
        value={this.state.value}
      />
   
      <button className="button" >Submit</button>

    </form>
    {fireRedirect&& <Redirect to={`/email`} />}
    </div>
    )
  }
}

export default Password 

