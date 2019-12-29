// src/react.tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
 
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './app'

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'http://localhost:4000' });

const ApolloApp = (AppComponent: any) => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
 
ReactDOM.render(<ApolloApp />, document.getElementById('app'));