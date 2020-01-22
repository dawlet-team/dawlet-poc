import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import MonacoEditor from "react-monaco-editor";

const GET_HELLO = gql`
  query {
    hello
  }
`;

const App = () => (
  <Query query={GET_HELLO}>
    {({ loading, error, data }: any) => {
      if (loading) return <div>Loading...</div>;
      if (error) console.error(error);
      // const code = this.state.code;
      const code = "hogehoge";
      const options = {
        selectOnLineNumbers: true
      };

      /**
       * TODO:
       * should send mutations on enter or something.
       */
      const onChange = (e: any) => {
        console.log("onchange");
        console.log(e);
      };
      const onDidMount = (e: any) => {
        console.log("ondidmount");
        console.log(e);
      };

      return (
        <MonacoEditor
          width="800"
          height="600"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={onChange}
          editorDidMount={onDidMount}
        />
      );
    }}
  </Query>
);

export default App;
