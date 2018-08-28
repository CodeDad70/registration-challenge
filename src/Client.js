
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-client-preset';
import {ApolloClient} from 'apollo-client';


// Set up Cache
const cache = new InMemoryCache();

// Initialize the Apollo Client
const Client = new ApolloClient({
  link: ApolloLink.from([]),
  uri: "https://api-uswest.graphcms.com/v1/cjjyp75qg035v01gmm81qwjhd/master",
  cache: cache,
});

export default {Client};

