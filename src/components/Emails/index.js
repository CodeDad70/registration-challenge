import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import Email from './Email';


const EmailsView = ({ emails }) => (
  <div>
    {emails.map(email => (
      <Email       
        id={email.id} 
        key={email.id}
        text={email.text}
      />
    ))}
  </div>
);


const GET_EMAILS = gql`
  {
    emails @client {
      id
      text
    }
  }
`;

const Emails =  () => (
  <Query query={GET_EMAILS}>
    {({ data: { emails } }) => <EmailsView emails={emails} />}
  </Query>
);

export default Emails;