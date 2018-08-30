import gql from 'graphql-tag';

const query = gql`
{
  email @client
}
`;


let nextEmailId = 0;

export default {
  
  Mutation: {
    addEmail: (_, { text }, { cache }) => {
      const query = gql`
        query GetEmails {
          emails @client {
            id
            text
            completed
          }
        }
      `;
      const previous = cache.readQuery({ query });
      const newEmail = {
        id: nextEmailId++,
        text,
        
        __typename: 'EmailItem',
      };
      const data = {
        emails: previous.emails.concat([newEmail]),
      };
      cache.writeData({ data });
      return newEmail;
    }
    
  },
};