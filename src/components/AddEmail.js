
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router'



class AddEmailView extends Component {
  inputEl;

  state = {
    toPassword: false,
    toFinish: false
  }

  handleOnChange = (e) => {
    localStorage.setItem('emailFormData', JSON.stringify(e.target.value));
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const { addEmail } = this.props;

    const text = this.inputEl.value.trim();
    console.log(text)
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(text)) {
     
      addEmail({ variables: { text } });

      this.inputEl.value = '';
      this.setState({ toPassword: true })

    } else {
      alert("Please enter an valid email address\n(example: name@email.com) ")
    }
  };

  render() {

    let placeholder
    !localStorage.getItem('emailFormData') ? placeholder = "Enter your email address" : placeholder = localStorage.getItem('emailFormData')

    return (
      <div className="main-card">
        <div className="headline"> <h3> Please enter your email: </h3></div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="searchbox"
            required type="text"
            ref={node => { this.inputEl = node; }}
            onChange={node => { this.handleOnChange(node) }}
            placeholder={placeholder}
          />
          <button type="submit">Submit Email </button>
        </form>
        {this.state.toPassword && <Redirect to={`/password`} />}
        {this.state.toFinish && <Redirect to={`/password`} />}

      </div>

    );
  }
}

const GET_EMAILS = gql`
  {
    emails @client {
      id
      text
    }
  }
`;

const ADD_EMAIL = gql`
  mutation addEmail($text: String!) {
    addEmail(text: $text) @client {
      id
    }
  }
`;

const AddEmail = () => (
  <Mutation mutation={ADD_EMAIL}>
    {addEmail => (<AddEmailView addEmail={addEmail} />)}
  </Mutation>
);


export default AddEmail;