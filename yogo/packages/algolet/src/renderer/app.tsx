import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_HELLO = gql`
  query {
    hello
  }
`

const App = () => (
  <Query query={GET_HELLO}>
    {({ loading, error, data }: any) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return (
        <div>{JSON.stringify(data)}</div>
      )
    }}
  </Query>
)

export default App