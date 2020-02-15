import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_HELLO = gql`
  query {
    getScore {
      notes {
        id
        freq
        duration
      }
    }
  }
`;


const App = () => (
  <Query query={GET_HELLO}>
    {({ loading, error, data }: any) => {
      if (loading) return <div>Loading...</div>;
      if (error) console.error(error);
      console.log(data)
      return (
        <h1>Synthlet</h1>
      );
    }}
  </Query>
);

export default App;
