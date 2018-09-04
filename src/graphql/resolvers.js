import gql from 'graphql-tag';

const query = gql`
{
  email @client
  password @client
}
`;

let nextEmailId = 0;
let nextPasswordId = 0;

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


    addPassword: (_, { text }, { cache }) => {
      const query = gql`
        query GetPasswords {
          passwords @client {
            id
            text
            completed
          }
        }
      `;
      const previous = cache.readQuery({ query });
      const newPassword = {
        id: nextPasswordId++,
        text,
        
        __typename: 'PasswordItem',
      };
      const data = {
        passwords: previous.passwords.concat([newPassword]),
      };
      cache.writeData({ data });
      return newPassword;
    }
    
  }
