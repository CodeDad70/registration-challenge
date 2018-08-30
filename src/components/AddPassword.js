
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
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(text)) {

      addPassword({ variables: { text } });

     
      this.setState({ toTimezone: true })

    } else {
      alert("Please enter an valid email address\n(example: name@email.com) ")
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