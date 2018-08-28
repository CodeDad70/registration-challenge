import React from "react";
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from 'react-apollo';

import App from "./App";
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const client = new ApolloClient({
  uri: "https://api-uswest.graphcms.com/v1/cjjyp75qg035v01gmm81qwjhd/master"
});

const Root =() =>  (
    <ApolloProvider client={Client}>
      <App/>
    </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();