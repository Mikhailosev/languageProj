import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./css/main.css";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import * as serviceWorker from "./serviceWorker";
const client = new ApolloClient({
  uri: "https://mighty-falls-75627.herokuapp.com/graphql"
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
