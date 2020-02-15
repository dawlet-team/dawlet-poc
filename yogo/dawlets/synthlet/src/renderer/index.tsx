import * as React from 'react';
import * as ReactDOM from 'react-dom';
 
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import App from './app'

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true
  }
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

const ApolloApp = (AppComponent: any) => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
 
ReactDOM.render(<ApolloApp />, document.getElementById('app'));