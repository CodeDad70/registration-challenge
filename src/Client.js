import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-client-preset';
import {ApolloClient} from 'apollo-client';
import {withClientState} from 'apollo-link-state';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import compose from 'recompose/compose';

/*
  Defaults
*/

const registrationDefaults = {
  currentEmail: "",
  fireRedirect: false
};

/*
  GraphQL
*/

const emailQuery = gql`
  query GetTodo {
    currentEmail @client
  }
`;

const clearEmailQuery = gql`
  mutation clearEmail {
    clearEmail @client
  }
`;

const addEmailQuery = gql`
  mutation addEmail($item: String) {
    addEmail(item: $item) @client
  }
`;

/*
  Cache Mutations
*/

export const addEmail = (_obj, item, {cache}) => {
  console.log('obj', _obj, "currentEmail", currentEmail, "cache", cache)
  const query = emailQuery;
  // Read the email from the cache
  const {currentEmail} = cache.readQuery({query});

  // Add the item to the current email
  const updatedEmail = item;

  // Update the cached email
  cache.writeQuery({query, data: {currentEmail: updatedEmail}});

  return null;
};

const clearEmail = (_obj, _args, {cache}) => {
  cache.writeQuery({query: emailQuery, data: registrationDefaults});
  return null;
};

/*
  Store
*/

// Set up Cache
const cache = new InMemoryCache();

// Set up Local State
const stateLink = withClientState({
  cache,
  defaults: registrationDefaults,
  resolvers: {
    Mutation: {
      addEmail,
      clearEmail,
    },
  },
});

// Initialize the Apollo Client
const Client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
  ]),
  uri: "https://api-uswest.graphcms.com/v1/cjjyp75qg035v01gmm81qwjhd/master",
  cache: cache,
});


/*
  Helpers
*/

const emailQueryHandler = {
  props: ({ownProps, data: {currentEmail = []}}) => ({
    ...ownProps,
    currentEmail,
  }),
};

const withEmail = compose(
  graphql(emailQuery, emailQueryHandler),
  graphql(addEmailQuery, {name: 'addEmailMutation'}),
  graphql(clearEmailQuery, {name: 'clearEmailMutation'}),
);

export {
  Client,
  withEmail
}