import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router'

let fireRedirect

class AddEmailView extends Component {
  inputEl;
  
  handleOnChange = (e) => {
    localStorage.setItem('emailFormData', JSON.stringify(e.target.value));
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const { addEmail } = this.props;
    const text = this.inputEl.value.trim();
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(text)) {
      
      addEmail({ variables: { text } });
      fireRedirect = true 
      this.inputEl.value = '';
    } else {
    alert("Please enter an valid email address\n(example: name@email.com) ")
    }
  };

  render() {
    
    fireRedirect =false
    
    let placeholder
    !localStorage.getItem('emailFormData') ? placeholder = "Enter your email address" : placeholder = localStorage.getItem('emailFormData')

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            className = "searchbox"
            required type = "text"
            ref={node => { this.inputEl = node; }}
            onChange={node=> {this.handleOnChange(node)}}
            placeholder = {placeholder}
          />
          <button type="submit">Submit Email </button>
        </form>
        {fireRedirect && <Redirect to={`/password`} />}
      </div>
    );
  }
}

AddEmailView.propTypes = {
  addEmail: PropTypes.func.isRequired,
};

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