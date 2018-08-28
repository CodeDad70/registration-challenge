import React, { Component } from 'react';
import { Redirect } from 'react-router'


class Email extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      fireRedirect: false
    }
  }

  handleOnChange = (e) => {
    localStorage.setItem('emailFormData', JSON.stringify(e.target.value));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(this.getEmail.value)) {
      // this.props.updateState(this.getEmail.value)
      this.setState({
        email: this.getEmail.value,
        fireRedirect: true
      })
    } else
      alert("Please enter an valid email address\n(example: name@email.com) ")
  }


  render() {
    const fireRedirect = this.state.fireRedirect
    let placeholder
    !localStorage.getItem('emailFormData') ? placeholder = "Enter your email address" : placeholder = localStorage.getItem('emailFormData')
    return (
      <div className = "main-card">
        <div className="headline"> <h3> Please enter your email address: </h3></div>
        <form onSubmit={this.handleSubmit}>

          <input
            className="searchbox"
            required type="text"
            ref={(input) => this.getEmail = input}
            onChange={e => this.handleOnChange(e)}
            name='emailForm'
            placeholder={placeholder}
            value={this.state.value}
          /> 
          
          <br /><br />

          <button className="button" >Submit</button>

        </form>
        {fireRedirect && <Redirect to={`/password`} />}
      </div>
    )
  }
}

export default Email

