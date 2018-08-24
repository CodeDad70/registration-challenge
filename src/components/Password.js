import React, { Component } from 'react';
import { Redirect } from 'react-router'

class Password extends Component {

  constructor(props) {
    super(props);

    this.state = {
      password: "",
      fireRedirect: false
    }
  }


  handleOnChange = (e) => {
    localStorage.setItem('passwordFormData', JSON.stringify(e.target.value));
  }

  handleSubmit = (e) => {
    console.log('before values', this.props.state)
    e.preventDefault();

    if (/^(?=.{8,})/.test(this.getPassword.value)) {
      // this.props.updateState(this.getPassword.value)
      this.setState({
        password: this.getPassword.value,
        fireRedirect: true
      })
      console.log(this.state)
    } else
      alert("Please enter an valid password\nMust be at least 8 characters\nMust have letters, numbers, and symbols only\nMust not allow two characters to repeat more than twice in a row\nMust have one or more uppercase letters")
  }

  render() {

    let placeholder
    !localStorage.getItem('passwordFormData') ? placeholder = "Enter a password" : placeholder = localStorage.getItem('passwordFormData')
    return (
      <div className = "main-card">
        <div className="headline"> <h3> Please create your password: </h3></div>
        <sm>* Must be at least 8 characters</sm><br />
        <sm>* Must have letters, numbers, and symbols only</sm><br />
        <sm>* Must not allow two characters to repeat more than twice in a row</sm><br />
        <sm>* Must have one or more uppercase letters</sm><br /><br />

        <form onSubmit={this.handleSubmit}>

          <input
            className="searchbox"
            required type="text"
            ref={(input) => this.getPassword = input}
            onChange={e => this.handleOnChange(e)}
            name='passwordForm'
            placeholder={placeholder}
            value={this.state.value}
          />

          <br /><br />

          <button className="button" >Submit</button>

        </form>
        {this.state.fireRedirect && <Redirect to={`/timezones`} />}
      </div>
    )
  }
}

export default Password

