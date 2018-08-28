import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Wrapper from "./Wrapper";
import './index.css';
import {Client} from './Client'


const App = function App() {
  return (
    <ApolloProvider client={Client}>
      <Wrapper/>
    </ApolloProvider>
  );
};

render(<App />, document.getElementById("app"));