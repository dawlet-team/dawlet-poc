import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import MonacoEditor from "react-monaco-editor";
import SplitPane from 'react-split-pane'
import { join } from "path";
import { readFileSync } from "fs";
import { SheetMusicViewer } from "sheetmusic-viewer";

const GET_HELLO = gql`
  query {
    hello
  }
`;

const sampleFile = readFileSync(
  join(process.cwd(), "../../packages/sheetmusic-viewer/public/sample.xml"),
  { encoding: "utf-8" }
);

const App = () => (
  <Query query={GET_HELLO}>
    {({ loading, error, data }: any) => {
      if (loading) return <div>Loading...</div>;
      if (error) console.error(error);
      // const code = this.state.code;
      const code = "const pitch = Math.floor(Math.random() * 60)";

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
        <SplitPane split="vertical" defaultSize="400">
          <div id="monaco-wrapper" style={{height: '100%'}}>
            <MonacoEditor
              language="javascript"
              theme="vs-dark"
              value={code}
              options={{
                selectOnLineNumbers: true,
                automaticLayout: true
              }}
              onChange={onChange}
              editorDidMount={onDidMount}
            />
          </div>
          <SheetMusicViewer options={{ autoResize: true }} file={sampleFile} />
        </SplitPane>
      );
    }}
  </Query>
);

export default App;
