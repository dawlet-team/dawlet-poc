import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import MonacoEditor from "react-monaco-editor";
import SplitPane from 'react-split-pane'
// @ts-ignore
import Pane from 'react-split-pane/lib/Pane';
import { join } from "path";
import { readFileSync } from "fs";
import { SheetMusicViewer } from "@dawlet/sheetmusic-viewer";

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
        <SplitPane split="vertical">
          <Pane>
            <div id="monaco-wrapper" style={{height: '100%', opacity: 0.7}}>
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
          </Pane>
          <Pane style={{background: 'white'}}>
            <SheetMusicViewer options={{ autoResize: true }} file={sampleFile} />
          </Pane>
        </SplitPane>
      );
    }}
  </Query>
);

export default App;
