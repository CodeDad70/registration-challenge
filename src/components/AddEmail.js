import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

class AddEmailView extends Component {
  inputEl;

  handleSubmit = (e) => {
    e.preventDefault();
    const { addEmail } = this.props;
    const text = this.inputEl.value.trim();
    if (!text) return;
    addEmail({ variables: { text } });
    this.inputEl.value = '';
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref={node => { this.inputEl = node; }} />
          <button type="submit">Submit Email </button>
        </form>
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