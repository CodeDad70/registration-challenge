import React, { Component } from 'react';
import { Redirect } from 'react-router'
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import {withEmail} from '../Client'
import {setEmailText} from '../Client'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {addEmail} from '../Client'
import { PropTypes } from 'prop-types';



import {currentEmail} from '../Client'


class AddTodoView extends Component {

  inputEl

  handleOnChange = (e) => {
    localStorage.setItem(e,'emailFormData')
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {addTodo} = this.props;
    const text = this.inputEl.value.trim()
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(text)) {
      addTodo({ variables: { text } });
      this.inputEl.value = '';
      

      
    } else
      alert("Please enter an valid email address\n(example: name@email.com) ")
  }


  render() {
    // const fireRedirect = this.props.fireRedirect
    let placeholder
    


    !localStorage.getItem('emailFormData') ? placeholder = "Enter your email address" : placeholder = localStorage.getItem('emailFormData')
    

    return (
      <div className = "main-card">
        <div className="headline"> <h3> Please enter your email address: </h3>
       
        </div>
        

        <form onSubmit={this.handleSubmit}>

        <input
          className="searchbox"
          required type="text"
          ref={node => { this.inputEl = node; }}
          onChange={e => this.handleOnChange(e)}
          name='emailForm'
          placeholder={placeholder}
          
        /> 

        <br /><br />

        <button type = "submit" className="button" >Submit</button>

        </form>
        {/* {fireRedirect && <Redirect to={`/password`} />} */}
      </div>
    )
  }
}

AddTodoView.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

const ADD_TODO = gql`
  mutation addTodo($text: String!) {
    addTodo(text: $text) @client {
      id
    }
  }
`;

const AddTodo = () => (
  <Mutation mutation={ADD_TODO}>
    {addTodo => (<AddTodoView addTodo={addTodo} />)}
  </Mutation>
);


export default AddTodo