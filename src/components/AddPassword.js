
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router'



class AddPasswordView extends Component {
  inputEl;

  state = {
    toTimezone: false,
    toFinish: false
  }

  handleOnChange = (e) => {
    localStorage.setItem('passwordFormData', JSON.stringify(e.target.value));
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const { addPassword } = this.props;

    const text = this.inputEl.value.trim();
    console.log(text)
    if (/^(?!.*([A-Za-z0-9])\1{2})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z0-9]+$/.test(text)) {
      addPassword({ variables: { text } });
      this.setState({ toTimezone: true })
    } else {
      alert ("Please enter an valid password\nMust be at least 8 characters\nMust have letters, numbers, and symbols only\nMust not have two characters repeating\nMust have one or more uppercase letters")
    }
  };

  render() {




    let placeholder
    !localStorage.getItem('passwordFormData') ? placeholder = "Enter your password" : placeholder = localStorage.getItem('passwordFormData')

    return (
      <div className="main-card">
        <div className="headline"> <h3> Please enter your password: </h3></div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="searchbox"
            required type="text"
            ref={node => { this.inputEl = node; }}
            onChange={node => { this.handleOnChange(node) }}
            placeholder={placeholder}
          />
          <button type="submit">Submit Password </button>
        </form>
        {this.state.toTimezone && <Redirect to={`/timezones`} />}
        {this.state.toFinish && <Redirect to={`/password`} />}

      </div>

    );
  }
}

const GET_PASSWORDS = gql`
  {
    passwords @client {
      id
      text
    }
  }
`;

const ADD_PASSWORD = gql`
  mutation addPassword($text: String!) {
    addPassword(text: $text) @client {
      id
    }
  }
`;

const AddPassword = () => (
  <Mutation mutation={ADD_PASSWORD}>
    {addPassword => (<AddPasswordView addPassword={addPassword} />)}
  </Mutation>
);


export default AddPassword;