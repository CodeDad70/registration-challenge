import React from 'react';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import {withEmail} from '../Client'

const EmailListPure =({
  currentEmail,
  addEmailMutation,
  emailText,
  setEmailText,
}) => (
  <div>
  <h1>Enter Your Email</h1>
  {currentEmail.map((email, index) => <div key={index}>{email}</div>)}
  <input
    value={emailText}
    onChange={(e) => setEmailText(e.target.value)}
    type='text'
    placeholder='Test'
  />
  <input type='submit' value='Add' onClick={(e) => {
    addEmailMutation({variables: {item: emailText}});
    setEmailText("")
  }} />
 
</div>);

const EmailList = compose(
withEmail,
withState('emailText', 'setEmailText', ''),
)(EmailListPure);

export default EmailList;