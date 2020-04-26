import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { join } from "path";
import { readFileSync } from "fs";
import { SheetMusicViewer } from "@dawlet/ui";

const GET_HELLO = gql`
  query {
    hello
  }
`;

const sampleFile = readFileSync(
  join(process.cwd(), "../../packages/ui/public/sample.xml"),
  { encoding: "utf-8" }
);

const App = () => (
  <Query query={GET_HELLO}>
    {({ loading, error, data }: any) => {
      if (loading) return <div>Loading...</div>;
      if (error) console.error(error);
      return (
        <SheetMusicViewer options={{ autoResize: true }} file={sampleFile} />
      );
    }}
  </Query>
);

export default App;
