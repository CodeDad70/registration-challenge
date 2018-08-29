import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from "react-apollo";
import Wrapper from "./Wrapper";
import './index.css';
import defaults from './graphql/defaults';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const URI = "https://api-uswest.graphcms.com/v1/cjjyp75qg035v01gmm81qwjhd/master"


const client = new ApolloClient({
  uri: URI,
  clientState: {
    defaults,
    resolvers,
    typeDefs
  },
});



const App = function App() {
  return (
    <ApolloProvider client={client}>
      <Wrapper/>
    </ApolloProvider>
  );
};

render(<App />, document.getElementById("app"));