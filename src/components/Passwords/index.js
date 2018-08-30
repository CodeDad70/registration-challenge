import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import Password from './Password';

const PasswordsView = ({ passwords }) => (
  <div>
    {passwords.map(password => (
      <Password       
        id={password.id} 
        key={password.id}
        text={password.text}
      />
    ))}
  </div>
);


const GET_PASSWORDS = gql`
  {
    passwords @client {
      id
      text
    }
  }
`;

const Passwords =  () => (
  <Query query={GET_PASSWORDS}>
    {({ data: { passwords } }) => <PasswordsView passwords={passwords} />}
  </Query>
);

export default Passwords;