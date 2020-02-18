import React from "react";
import { gql } from "apollo-boost";
import { useSubscription } from "react-apollo";
import { Synth } from './synth'

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
  return (
    <div>
      <h1>Synthlet</h1>
      {JSON.stringify(data)}
      <Synth />
    </div>
  )

};

export default App;
