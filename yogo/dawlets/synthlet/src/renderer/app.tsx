import React from "react";
import { gql } from "apollo-boost";
import { useSubscription } from "react-apollo";

const UPDATE_SCORE_SUBSCRIPTION = gql`
  subscription {
    updateScore {
      notes {
        id
        freq
        duration
        offset
      }
    }
  }
`;

const App = () => {
  const { data, loading, error } = useSubscription(UPDATE_SCORE_SUBSCRIPTION)
  if (loading) return <div>Loading...</div>;
  if (error) console.error(error);
  console.log(data);
  return <h1>Synthlet</h1>;
};

export default App;
